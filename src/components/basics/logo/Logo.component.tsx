import styled from "styled-components";
import logo from "./Logo.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoBox = styled.span`
  width: fit-content;
  height: fit-content;
  color: var(--main-white);
  text-align: center;
  font-family: NCS Radhiumz;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Img = styled.img`
  width: 3.25rem;
  height: 3.25rem;
`;

const LogoComponent = () => {
  return (
    <Wrapper>
      <LogoBox>MIIMGOO</LogoBox>
      <Img src={logo} />
    </Wrapper>
  );
};

export default LogoComponent;
