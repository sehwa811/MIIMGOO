import { useNavigate } from "react-router-dom";
import LogoPart from "../detailpage/component/LogoPart";
import LabelComponent from "../../components/basics/label-box/Label.component";

import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12.44rem;
  position: relative;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
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

  return (
    <>
      <LogoPart />
      <Wrapper>
        <LabelComponent top="1.19rem" labelText="계정" />

        <ButtonBox>
          <button>
            <span>로그아웃</span>
          </button>
          <button>
            <span>회원탈퇴</span>
          </button>
          <AdminLogin onClick={handleOnClick}>
          <span>밈구의 관리자로 로그인하시겠습니까?</span>
          </AdminLogin>
        </ButtonBox>

        
      </Wrapper>
    </>
  );
}
