import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../../components/basics/button.component";
import WelcomeMsg from "./WelcomeMsg.component";
import { API_HOST } from "../../utils/API";

import { Background, LogoBox, ButtonBox, ButtonLabel } from "./Login.styles";
import { getNaverUrl } from "../../utils/axios";

export default function LoginPage() {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/home");
  };

 
  return (
    <Background className="login-page">
      <WelcomeMsg />
      <LogoBox></LogoBox>
      <ButtonBox>
        <Button
          onClick={getNaverUrl}
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
