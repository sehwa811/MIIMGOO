import axios from "axios";
import Cookie from "js-cookie";

import { API_HOST } from "./API";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/api/"
      : "https://prod.miimgoo.site/api/",
  withCredentials: true,
});

//네이버 로그인
export const naverLogin = (code: string) =>
  instance
    .post(
      "users/naver/",
      { code, state: "miimgoo" },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);

export const getNaverUrl = async () =>
  instance.get("users/naver/request").then((response) => {
    window.location.href = response.data.url;
  });

//S3에 이미지 저장
export const uploadToS3 = async (
  imageTitle: string,
  image: any,
  inputTitle: string,
  tags: string[]
) => {
  //2
  const postTheMeme = async (URL: string) => {
    const res = await axios({
      baseURL: API_HOST,
      url: "/api/memes/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        title: inputTitle,
        meme_url: URL,
        tags: tags,
      },
    });
    console.log(3333333333);
  };

  //1
  axios({
    baseURL: API_HOST,
    url: "/api/memes/uploadURL/",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: {
      filename: imageTitle,
    },
  }).then(async (res) => {
    const formData = new FormData();
    console.log("uploadURL", res.data);
    if (image !== null) {
      Object.keys(res.data.fields).forEach((key) => {
        formData.append(key, res.data.fields[key]);
      });
      formData.append("file", image);
    }
    console.log(111111111);
    //403 에러나는 부분
    const uploadRes = await axios.post(res.data.url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(uploadRes.status);

    if (uploadRes.status === 204) {
      console.log(2222222222);
      postTheMeme(res.data.url);
    }
  });
};

//홈 화면 이미지 4개 랜덤 GET
export const getHomeImg = async () => {
  return await instance.get("memes").then((res) => res.data);
};
