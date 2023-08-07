import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import MemeBox from "../../components/meme-box/MemeBox.component";
import LogoComponent from "../../components/basics/logo/Logo.component";
import HomeUpperComponent from "../../components/home-upper/HomeUpper.component";

const Wrapper = styled.div`
  height: 100vh;
`;

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Wrapper className="home">
      <LogoComponent />
      <HomeUpperComponent />
    </Wrapper>
  );
}
