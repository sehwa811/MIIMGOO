import Crying from "./404.gif";
import styled from "styled-components";
import LogoComponent from "./logo/Logo.component";
import { useNavigate } from "react-router-dom";
import { BigWrapper } from "../../routes/Homepage/Home.page";

const NotFoundBigWrapper = styled(BigWrapper)`
height: 100vh;`

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  position: relative;
`;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  height: 100%;
  width: 100%;

  img {
    width: 12.5rem;
    height: 12.5rem;
  }

  text {
    color: white;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.02rem;
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
    text-decoration-line: underline;
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
    <NotFoundBigWrapper>
      <NotFoundWrapper>
        <LogoComponent />
        <Wrapper className="not-found">
          <img src={Crying} />

          <TextBox>
            <text>죄송합니다.</text>
            <text>페이지를 찾을 수 없어요.</text>
          </TextBox>
          <span onClick={() => navigate(-1)}>이전 화면으로 이동하기</span>
        </Wrapper>
      </NotFoundWrapper>
    </NotFoundBigWrapper>
  );
};

export default NotFound;
