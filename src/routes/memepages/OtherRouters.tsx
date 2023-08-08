import Navigation from "../../components/Navigation/navigation.component";
import ContentsRouters from "./ContentsRouters";

import styled from "styled-components";

const BigBox = styled.div`
  padding-top: 3.75rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
`

const Others = () => {
  return (
    <>
      <Navigation />
      <BigBox className="big-box">
        <ContentsRouters />
      </BigBox>
    </>
  );
};

export default Others;