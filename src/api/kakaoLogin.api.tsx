import { instance } from "./instance";

export const kakaoLogin = (code: string) =>
  instance
    .post("users/kakao/", { code: code })
    .then((response) => response.status);

export const getKakaoUrl = async () =>
  instance.get("users/kakao/request").then((response) => {
    window.location.href = response.data.url;
  });

export const emailRequest = () =>
  instance
    .get("users/kakao/request/again")
    .then((res) => (window.location.href = res.data.url));