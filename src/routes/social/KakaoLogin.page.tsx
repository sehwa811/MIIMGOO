import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginLoadingPage from "./LoginLoading.component";

import { kakaoLogin } from "../../utils/axios";

export default function KakaoLoginPage() {
  const navigate = useNavigate();

  const { search } = useLocation();
  const mutation = useMutation(kakaoLogin, {
    onMutate: () => {
      console.log("mutating");
    },
    onSuccess: () => {
      console.log("success");
      navigate("/home");
    },
    onError: () => {
      if (mutation.data === 403) {
        alert("로그인에 실패하였습니다. 재시도해 이메일 수집에 동의해주세요. ");
        navigate("/");
      }
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
