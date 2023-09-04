import { useNavigate } from "react-router-dom";

import Button from "../../components/basics/button.component";
import WelcomeMsg from "./WelcomeMsg.component";
import { ReactComponent as Kakao } from "../../svg/kakao2.svg";

import {
  Background,
  LogoBox,
  ButtonBox,
  ButtonLabel,
  Label,
} from "./Login.styles";

import Logo from "../../assets/Logo.png"
import { useDispatch, useSelector } from "react-redux";
import { emailRequest, getKakaoUrl } from "../../api/kakaoLogin.api";
import { selectKakaoEmailCheck } from "../../store/KakaoEmailCheck";


export default function LoginPage() {
  const emailChecked = useSelector(selectKakaoEmailCheck)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/home");
  };

  return (
    <Background className="login-page">
      <WelcomeMsg />

      <LogoBox>
        <img src={Logo} alt="logo" />
      </LogoBox>

      <ButtonBox>
        <Button
          onClick={emailChecked ? getKakaoUrl : emailRequest}
          //onClick={() => dispatch(kakaoLoginStart())}
          color="#000"
          background="#FEE500"
          border="none"
        >
          <Label>
            <Kakao />
            <ButtonLabel>카카오 로그인</ButtonLabel>
          </Label>
        </Button>

        <Button onClick={gotoHome}>
          <ButtonLabel>비회원으로 둘러보기</ButtonLabel>
        </Button>
      </ButtonBox>
    </Background>
  );
}
