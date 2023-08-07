import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import MemeBox from "../../components/meme-box/MemeBox.component";

const Wrapper = styled.div`
  height: 100vh;
  
`;

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Home</h1>
      <MemeBox />
    </Wrapper>
  );
}
