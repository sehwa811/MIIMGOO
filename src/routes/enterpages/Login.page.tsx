import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Background = styled.div`
background-color: var(--main-white);
height: 100vh;
`

export default function LoginPage() {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate("/home");
    }

    return (
        <Background>
            <h1>Login</h1>
            <button onClick={gotoHome}>네이버 로그인</button>
        </Background>
    )
}