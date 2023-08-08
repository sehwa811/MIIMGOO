import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../../components/button.component";
import WelcomeMsg from "./WelcomeMsg.component";
import { API_HOST } from "../../utils/API";

import { Background, LogoBox, ButtonBox, ButtonLabel } from "./Login.styles";

export default function LoginPage() {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/home");
  };

  const instance = axios.create({
    baseURL: API_HOST,
    withCredentials: true,
  });

  const naverLogin = async () => {
    return instance.get("/api/users/naver/request").then((response) => {
      window.location.href = response.data.url;
    });
  };


  return (
    <Background className="login-page">
      <WelcomeMsg />
      <LogoBox></LogoBox>
      <ButtonBox>
        <Button
          onClick={naverLogin}
          color="white"
          background="#03C75A"
          border="none"
        >
          <ButtonLabel>네이버 로그인</ButtonLabel>
        </Button>
        <Button onClick={gotoHome}>
          <ButtonLabel>비회원으로 둘러보기</ButtonLabel>
        </Button>
      </ButtonBox>
    </Background>
  );
}
