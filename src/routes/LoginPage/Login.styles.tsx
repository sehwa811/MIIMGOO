import { keyframes } from "styled-components";
import styled from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Background = styled.div`
  background-color: var(--main-white);
  height: 100vh;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  width: 100%;
`;

export const LogoBox = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 2rem;
  background-color: var(--main-orange);
  position: absolute;
  top: 33.649%;
  left: 50%;
  transform: translate(-50%, 0%);

  img {
    width: 15rem;
    height: 15rem;
  }

  @media (max-height: 700px) {
    top: 33%;
  }
`;

export const ButtonBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 12%;
  /* bottom: 12%; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-height: 700px) {
    bottom: 6%;
  }
`;

export const ButtonLabel = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.02rem;
  width: fit-content;
`;

export const Label = styled.div`
  display:flex;
  width: 10rem;
  justify-content: space-between;
  align-items:center;
  gap:0.75rem;
`