import { useNavigate } from "react-router-dom";

import Button from "../../components/button.component";
import styled from "styled-components";
import WelcomeMsg from "./WelcomeMsg.component";

const Background = styled.div`
  background-color: var(--main-white);
  height: 100vh;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
`;

const LogoBox = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 2rem;
  background-color: var(--main-orange);
  position: relative;
  top: 17.75rem;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const ButtonBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 9.37rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonLabel = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

export default function LoginPage() {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/home");
  };

  const gotoNaverLogin = () => {
    navigate("/naver-login");
  };

  return (
    <Background className="login-page">
      <WelcomeMsg />

      <LogoBox></LogoBox>

      <ButtonBox>
        <Button
          onClick={gotoNaverLogin}
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
