import Loading from "./loading.gif";
import styled from "styled-components";
import LogoComponent from "../../components/basics/logo/Logo.component";
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
  gap: 0rem;
  height: 100%;
  width: 100%;

  img {
    width: 12.5rem;
    height: 12.5rem;
  }

  text {
    color: white;
    font-size: 1.5rem;
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

const LoadingComponent = () => {

  return (
    <NotFoundWrapper>
      <LogoComponent />
      <Wrapper className="not-found">
        <img src={Loading} />

        <TextBox>
          <text>로딩 중입니다...👀</text>
          
        </TextBox>
      </Wrapper>
    </NotFoundWrapper>
  );
};

export default LoadingComponent;