import styled from "styled-components";

const StyledDiv = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  top: 13.517%;

  h3 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.035rem;
    color: var(--typho-black);
  }

  span {
    color: var(--main-orange);
  }
`;


const WelcomeMsg = () => {
  return (
    <StyledDiv>
      <h3>
        안녕하세요!<br></br>트렌드를 따라가는 사람들,
        <br></br>
        <span>밈구</span>입니다
      </h3>
    </StyledDiv>
  );
};

export default WelcomeMsg;