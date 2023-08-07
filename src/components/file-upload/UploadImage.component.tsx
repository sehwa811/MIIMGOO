import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { API_HOST } from "../../utils/API";
import AllSelects from "../selectBox/AllSelects.component";
import { selectTags } from "../../store/tags/TagSelector";
import { selectImgTitle } from "../../store/image-upload/ImageSelector";
import { dispatchToImageReducer } from "../../store/image-upload/ImageAction";

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
  const tagList: string[] = Object.values(tags);
  const newList = tagList.filter((item) => !(item === null));

  const imageTitle = useSelector(selectImgTitle);
  
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  let imgLocation: any = null;
  const onImgChange = (e:any) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log(e.target.files[0]);
    imgLocation = e.target.files[0].name;
    dispatch(dispatchToImageReducer(imgLocation));
  };

  const sendToServer = async (e: any) => {
    let IMG_URL: string | null = null;

    const postTheMeme = async () => {
      const res = await axios({
        baseURL: API_HOST,
        url: "/api/memes/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: {
          title: inputText,
          meme_url: IMG_URL,
          tags: newList,
        },
      });
      console.log(res.data);
    };

    axios({
      baseURL: API_HOST,
      url: "/api/memes/uploadURL/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        filename: imageTitle,
      },
    })
      .then((res) => {
        console.log(res.data.url);
        IMG_URL = res.data.url;
        
        const FIELDS = res.data.fields


        postTheMeme();
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
