import axios from "axios";
import Cookie from "js-cookie";

import { instance } from "../api/instance";

import { ITag } from "../components/file-upload/TagUpload";



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
