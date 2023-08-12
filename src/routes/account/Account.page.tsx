import { useNavigate } from "react-router-dom";
import LogoPart from "../detailpage/component/LogoPart";
import LabelComponent from "../../components/basics/label-box/Label.component";

import styled from "styled-components";
import { useState } from "react";
import { postLogout } from "../../utils/axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12.44rem;
  position: relative;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`;

const LogoutBox = styled.button`
  display: flex;
  width: 21.875rem;
  height: 3.25rem;
  padding: 1rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #000;
  background: #0075ff;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);

  span {
    color: var(--main-white);
    text-align: center;
    font-family: Spoqa Han Sans Neo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.02rem;
  }
`;

const DeleteAccoutBox = styled.button`
  display: flex;
  width: 21.875rem;
  height: 3.25rem;
  padding: 1rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid var(--main-white);
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.4);
  background-color: transparent;

  span {
    color: var(--main-white);
    text-align: center;
    font-family: Spoqa Han Sans Neo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.02rem;
  }
`;

const AdminLogin = styled.div`
  span {
    color: #c4c4c4;
    text-align: center;
    font-family: Spoqa Han Sans Neo;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.015rem;
    text-decoration-line: underline;
  }
`;

export default function AccoutPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnClick = () => {
    navigate("/admin");
  };

  const handleLogOut = () => {
    postLogout();
    navigate("/");
  }

  return (
    <>
      <LogoPart />
      <Wrapper>
        <LabelComponent top="1.19rem" labelText="계정" />

        <ButtonBox>
          <LogoutBox onClick={handleLogOut}>
            <span>로그아웃</span>
          </LogoutBox>

          <DeleteAccoutBox>
            <span>회원탈퇴</span>
          </DeleteAccoutBox>

          <AdminLogin onClick={handleOnClick}>
            <span>밈구의 관리자로 로그인하시겠습니까?</span>
          </AdminLogin>
        </ButtonBox>
      </Wrapper>
    </>
  );
}
