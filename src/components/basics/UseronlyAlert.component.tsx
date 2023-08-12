import Crying from "./404.gif";
import styled from "styled-components";

const Container = styled.div`
  width: 24.375rem;
  height: 100vh;
  background-color: var(--main-orange);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 12.5rem;
    height: 12.5rem;
  }

  span {
    color: white;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.025rem;
    text-align: center;
  }
`;

const UserOnlyAlert = () => {
  return (
    <Container>
      <Wrapper>
        <img src={Crying} />
        <span>로그인 후 이용해주세요.</span>
      </Wrapper>
    </Container>
  );
};

export default UserOnlyAlert;