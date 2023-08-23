import LogoComponent from "../../components/basics/logo/Logo.component";
import HomeUpperComponent from "../../components/home-upper/HomeUpper.component";
import HomeLowerComponent from "../../components/home-lower/HomeLower.component";

import styled from "styled-components";

export const BigWrapper = styled.div`
  height: auto;
  padding-top: 3.75rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  padding-bottom: 6rem;
`;

export default function HomePage() {
  return (
    <BigWrapper className="home">
      <LogoComponent />
      <HomeUpperComponent />
      <HomeLowerComponent />
    </BigWrapper>
  );
}
