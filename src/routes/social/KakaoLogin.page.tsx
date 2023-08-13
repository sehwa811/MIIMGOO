import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginLoadingPage from "./LoginLoading.component";

import { kakaoLogin } from "../../utils/axios";
import { useDispatch } from "react-redux";
import createAction from "../../utils/action-creator";

export default function KakaoLoginPage() {
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const { search } = useLocation();
  const mutation = useMutation(kakaoLogin, {
    onSuccess: () => {
      setTimeout(()=>navigate("/home"), 2000);
      dispatch({type: "USER_LOG_IN", payload: true});
    },
    onError: (status:any) => {
      if (status.response.status === 403) {
        alert("로그인에 실패하였습니다. 재시도해 이메일 수집에 동의해주세요. ");
        navigate("/");
      }
    },
  });

  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      mutation.mutate(code);
    }
  };

  useEffect(() => {
    confirmLogin();
  }, []);

  return <LoginLoadingPage />;
}
