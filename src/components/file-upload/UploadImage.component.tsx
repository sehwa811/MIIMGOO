import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import AllSelects from "../../routes/admin/component/selectBox/AllSelects.component";
import { selectTags } from "../../store/tags/TagSelector";
import {
  selectImg,
  selectImgTitle,
} from "../../store/image-upload/ImageSelector";
import { setImageTitle, setImage } from "../../store/image-upload/ImageAction";

import { uploadToS3 } from "../../utils/axios";
import TagRegistration from "./TagUpload";

const UploadButton = styled.div`
  border: 2px solid black;
  width: fit-content;
  background-color: grey;
  font-size: 1.5rem;
`;

const UploadImage = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const tags = useSelector(selectTags);
  console.log(tags)
  const tagList: string[] = Object.values(tags);
  const newList = tagList.filter((item) => !(item === null));

  const imageTitle = useSelector(selectImgTitle);
  const image = useSelector(selectImg);


  const onImgChange = (e: any) => {
    const selectedImage = e.target.files[0];
    dispatch(setImage(selectedImage));
    dispatch(setImageTitle(selectedImage.name));
  };

  const sendToServer = () => {
    console.log("imageTitle", imageTitle);
    uploadToS3(imageTitle, image, inputText, newList);
    setInputText("");
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
      /><br></br>
      <AllSelects />
      <button onClick={sendToServer}>등록하기</button>
      <TagRegistration />
    </>
  );
};

export default UploadImage;
