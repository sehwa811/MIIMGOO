import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import AWS from "aws-sdk";

import styled from "styled-components";
import { API_HOST } from "../../utils/API";
import AllSelects from "../selectBox/AllSelects.component";
import { selectTags } from "../../store/tags/TagSelector";
import {
  selectFormData,
  selectImgObj,
} from "../../store/image-upload/ImageSelector";
import {
  dispatchSetFormData,
  dispatchToImageReducer,
} from "../../store/image-upload/ImageAction";

const UploadButton = styled.div`
  border: 2px solid black;
  width: fit-content;
  background-color: grey;
  font-size: 1.5rem;
`;

interface setImgFromFileProps {
  file: any;
  setImgUrl: any;
}

const UploadImage = (e: any) => {
  const tags = useSelector(selectTags);
  const formData = useSelector(selectFormData);
  const tagList: string[] = Object.values(tags);
  const newList = tagList.filter((item) => !(item === null));

  const imgObj = useSelector(selectImgObj);

  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const onImgChange = (e: any) => {
    formData.append("file", e.target.files[0]);
    console.log(e.target.files[0]);
    dispatch(dispatchToImageReducer(e.target.files[0]));
    dispatch(dispatchSetFormData(formData));
  };

  const sendToServer = async (e: any) => {
    const postTheMeme = async (DATA: any) => {
      const d = await axios.put(DATA, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(d.data);

      /* const res = await axios({
        baseURL: API_HOST,
        url: "/api/memes/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: {
          title: inputText,
          meme_url: DATA.url,
          tags: newList,
        },
      }); */
    };

    axios({
      baseURL: API_HOST,
      url: "/api/memes/uploadURL/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        filename: imgObj.name,
      },
    })
      .then((res) => {
        const DATA = res.data;
        postTheMeme(DATA);
        console.log(DATA);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <UploadButton>
        <label htmlFor="input-file">사진 선택</label>
        <input
          type="file"
          id="input-file"
          onChange={onImgChange}
          style={{ display: "none" }}
        />
      </UploadButton>
      <input
        type="text"
        value={inputText}
        onChange={(e: any) => setInputText(e.target.value)}
      />
      <AllSelects />
      <button onClick={sendToServer}>등록하기</button>
    </>
  );
};

export default UploadImage;
