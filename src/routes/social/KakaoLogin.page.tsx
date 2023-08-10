import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginLoadingPage from "./LoginLoading.component";

import { naverLogin } from "../../utils/axios";

export default function KakaoLoginPage() {
  const navigate = useNavigate();

  const { search } = useLocation();
  const mutation = useMutation(naverLogin, {
    onMutate: () => {
      console.log("mutating");
    },
    onSuccess: () => {
      console.log("success");
      navigate("/home");
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
