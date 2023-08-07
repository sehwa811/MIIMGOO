import { ReactElement, useState } from "react";
import axios from "axios";
import styled from "styled-components";

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
  const API_HOST = "http://backend.miimgoo.site";
  const [imgUrl, setImgUrl] = useState(null);

  /* const setImgFromFile = ({ file, setImgUrl }: setImgFromFileProps) => {
    let reader = new FileReader();
    reader.onload = function () {
      setImgUrl({ result: reader.result });
    };
    reader.readAsDataURL(file);
  }; */

  const onImgChange = async (e: any) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    let IMG_URL: string | null = null;

    const postTheMeme = async () => {
      const res = await axios({
        baseURL: API_HOST,
        url: "/api/memes/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: {
          title: "TEST",
          meme_url: IMG_URL,
          tags: ["짱구"],
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
        filename: e.target.files[0].name,
      },
    })
      .then((res) => {
        console.log(res.data.url);
        IMG_URL = res.data.url;
        postTheMeme();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <UploadButton>
        <label htmlFor="input-file">사진 업로드</label>
        <input
          type="file"
          id="input-file"
          onChange={onImgChange}
          style={{ display: "none" }}
        />
      </UploadButton>
      {imgUrl}
    </>
  );
};

export default UploadImage;
