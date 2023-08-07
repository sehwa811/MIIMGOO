import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
border: 1px solid var(--main-white, #FFF);

span {
    color: var(--main-white, #FFF);
text-align: center;
font-family: Spoqa Han Sans Neo;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.025rem;
}
`;

const text = "지금 가장 HOT한 오늘의 밈";

const LabelComponent = () => {
  return (
    <Wrapper>
      <span>{text}</span>
      {/* icon */}
    </Wrapper>
  );
};

export default LabelComponent;
