import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import LogoPart from "../../components/LogoPart";
import LabelComponent from "../../components/basics/label-box/Label.component";
import { deleteUser, postLogout } from "../../utils/axios";

import styled from "styled-components";
import Modal from "../AdminPage/modal.component";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/UserInfoReducer";
import UserOnlyAlert from "../../components/basics/UseronlyAlert.component";
import { BigWrapper } from "../Homepage/Home.page";

const AccountBigWrapper = styled(BigWrapper)`
height: 100vh;`

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

const AdminLogin = styled.a`
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
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userLogOut = useMutation(postLogout, {
    onSuccess: () => {
      alert("성공적으로 로그아웃 되었습니다 :)");
      dispatch({ type: "USER_LOG_OUT", payload: false });
    },
  });

  const deleteUserInfo = useMutation(deleteUser, {
    onMutate: () => {},
    onSuccess: () => {
      alert("회원정보가 성공적으로 삭제되었습니다 :)");
      dispatch({ type: "USER_LOG_OUT", payload: false });
      navigate("/");
    },
    onError: () => {},
  });

  const handleLogOut = () => {
    userLogOut.mutate();
    navigate("/");
  };

  const deleteAccount = () => {
    deleteUserInfo.mutate();
  };

  return (
    <>
      {isLoggedIn ? (
        <AccountBigWrapper>
          <LogoPart />
          <Wrapper>
            <LabelComponent top="1.19rem" labelText="계정" />

            <ButtonBox>
              <LogoutBox onClick={handleLogOut}>
                <span>로그아웃</span>
              </LogoutBox>

              <DeleteAccoutBox onClick={deleteAccount}>
                <span>회원탈퇴</span>
              </DeleteAccoutBox>

              <AdminLogin onClick={() => navigate("/admin")}>
                <span>밈구의 관리자로 로그인하시겠습니까?</span>
              </AdminLogin>
            </ButtonBox>
          </Wrapper>
          <Modal
            fontSize="1rem"
            isModalOpen={show}
            height="10rem"
            close={handleClose}
          />
        </AccountBigWrapper>
      ) : (
        <UserOnlyAlert />
      )}
    </>
  );
}
