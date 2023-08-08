import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import LoginLoadingPage from "./LoginLoading.component";

import { API_HOST } from "../../utils/API";
import { naverLogin } from "../../utils/axios";

export default function NaverLoginPage() {
    const navigate = useNavigate();
  
  const { search } = useLocation();
  const mutation = useMutation(naverLogin, {
    onMutate: () => {
      console.log("mutating");
    },
    onSuccess: () => {
      console.log("success");
      navigate("/home")
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