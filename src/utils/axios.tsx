import axios from "axios";
import Cookie from "js-cookie";

import { API_HOST } from "./API";

import { ITag } from "../components/file-upload/TagUpload";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/api/"
      : "https://prod.miimgoo.site/api/",
  withCredentials: true,
});

//네이버 로그인
export const kakaoLogin = (code: string) =>
  instance
    .post(
      "users/kakao/",
      { code: code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);

export const getKakaoUrl = async () =>
  instance.get("users/kakao/request").then((response) => {
    window.location.href = response.data.url;
  });

export const emailRequest = () =>
  instance
    .get("users/kakao/request/again")
    .then((res) => (window.location.href = res.data.url));

//S3에 이미지 저장
export const uploadToS3 = async (
  imageTitle: string,
  image: any,
  inputTitle: string,
  tags: string[]
) => {
  //2
  const postTheMeme = async (URL: string, keyValue: string) =>
    instance.post(
      "memes/",

      {
        title: inputTitle,
        meme_url: `${URL}/${keyValue}`,
        tags: tags,
      },

      { headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" } }
    );

  //1

  instance
    .post(
      "memes/uploadURL/",
      {
        filename: imageTitle,
      },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then(async (res) => {
      const formData = new FormData();
      const keyValue = res.data.fields.key;

      if (image !== null) {
        Object.keys(res.data.fields).forEach((key) => {
          formData.append(key, res.data.fields[key]);
        });
        formData.append("file", image);
      }
      const uploadRes = await axios.post(res.data.url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (uploadRes.status === 204) {
        postTheMeme(res.data.url, keyValue);
      }
    });
};

//홈 화면 이미지 4개 랜덤 GET
export const getHomeImg = () => instance.get("memes/").then((res) => res.data);

export const getImgDetail = (state: number) =>
  instance.get(`memes/${state}/`).then((res) => res.data);

export const getTagsList = () => instance.get("tags/").then((res) => res.data);

export const postTagsList = (tagList: ITag[]) =>
  instance
    .post("tags/", tagList, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((res) => res.data);

export const getSearchResult = (state: any) =>
  instance
    .get(`memes/search/tag/?tags=${encodeURIComponent(JSON.stringify(state))}`)
    .then((res) => res.data);

export const postComment = ({ id, text }: any) => {
  return instance
    .post(
      `memes/${id}/comment`,
      { description: text },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((res) => res.status);
};
//id, text 잘 넘어가는데 CORS 뜸
//tex

export const postFav = (id: number) =>
  instance
    .post(
      `favorites/meme/${id}/`,
      {},
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((res) => res.data);

export const getFavImages = () =>
  instance.get("favorites/me/").then((res) => res.data);

export const postLogout = () =>
  instance
    .post(
      "users/logout/",
      {},
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((res) => res.data);

export const deleteUser = () =>
  instance
    .delete("users/me/", {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((res) => res.data);

export const getBlob = (url: any) =>
  instance
    .post(
      "memes/download/",
      { url: url },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((res) => res.data);
