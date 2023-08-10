import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import LogoComponent from "../../components/basics/logo/Logo.component";
import HomeUpperComponent from "../../components/home-upper/HomeUpper.component";
import HomeLowerComponent from "../../components/home-lower/HomeLower.component";
import { getHomeImg } from "../../utils/axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  height: 100%;
`;

export default function HomePage() {
  
  const navigate = useNavigate();

  return (
    <Wrapper className="home">
      <LogoComponent />
      <HomeUpperComponent />
      <HomeLowerComponent />
    </Wrapper>
  );
}
