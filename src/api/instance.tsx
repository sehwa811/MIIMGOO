import axios from "axios";
import Cookie from "js-cookie";

export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/api/"
      : "https://prod.miimgoo.site/api/",
  withCredentials: true,
  headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
});
