import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/api/"
      : "https://prod.miimgoo.site/api/",
  withCredentials: true,
});

export const naverLogin = (code: string) =>
  instance
    .post(
      "/users/naver/",
      { code, state: "miimgoo" },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);
