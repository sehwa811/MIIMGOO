import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import LoginLoadingPage from "./LoginLoading.component";

export default function NaverLoginPage() {
  const kakaoLogin = (code: string) =>
    axios
      .post(
        "http://backend.miimgoo.site/api/users/naver/",
        { code, state: "miimgoo" },
        {
          headers: {
            "X-CSRFToken": Cookie.get("csrfToken") || "",
          },
        }
      )
      .then((response) => response.status);


  const { search } = useLocation();
  const mutation = useMutation(kakaoLogin, {
    onMutate: () => {
      console.log("mutating");
    },
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    console.log(code);
    if (code) {
      mutation.mutate(code);
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return <LoginLoadingPage />;
}