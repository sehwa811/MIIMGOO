import Crying from "./404.gif";
import styled from "styled-components";
import LogoComponent from "./logo/Logo.component";
import { useNavigate } from "react-router-dom";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  position: relative;
  margin-bottom: 6rem;
`;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  width: 100%;

  img {
    width: 12.5rem;
    height: 12.5rem;
  }

  text {
    color: white;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.025rem;
    text-align: center;
  }

  span {
    margin-top: 5rem;
    color: var(--typho-grey-2);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.025rem;
    text-align: center;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <LogoComponent />
      <Wrapper className="not-found">
        <img src={Crying} />

        <TextBox>
          <text>죄송합니다.</text>
          <text>페이지를 찾을 수 없어요.</text>
        </TextBox>
        <span onClick={()=>navigate(-1)} >이전 화면으로 이동하기</span>
      </Wrapper>
    </NotFoundWrapper>
  );
};

export default NotFound;
