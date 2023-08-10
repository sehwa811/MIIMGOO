import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--main-white);
  height: 100vh;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
`;

export const LogoBox = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 2rem;
  background-color: var(--main-orange);
  position: relative;
  top: 33.649%;
  left: 50%;
  transform: translate(-50%, 0%);

  img {
    width: 15rem;
    height: 15rem;
  }
`;

export const ButtonBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 13.27%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonLabel = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02rem;
`;