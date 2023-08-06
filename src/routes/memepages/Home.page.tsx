import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  
`;

export default function HomePage() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/admin");
  };

  return (
    <Wrapper>
      <h1>Home</h1>
      <button onClick={handleOnClick}>Admin</button>
    </Wrapper>
  );
}
