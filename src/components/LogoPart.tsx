import { useNavigate } from "react-router-dom";

import LogoComponent from "./basics/logo/Logo.component";
import { ReactComponent as Previous } from "../svg/Previous.svg";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 16.37917rem;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviousButton = styled.button`
  display: inline-flex;
  padding: 0.5rem;
  height: fit-content;
  width: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.25rem;
  border: 1px solid #000;
  background: #0075ff;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const LogoPart = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="logo-part">
      <PreviousButton onClick={() => navigate(-1)}>
        <Previous />
      </PreviousButton>
      <LogoComponent />
    </Wrapper>
  );
};

export default LogoPart;
