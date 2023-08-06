
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBox = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  width: 100%;
  max-width: 28rem;
  height: 5rem;
  background: var(--main-blue);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.50);
  z-index: 1;
`;

const Navigation = () => {
  return (
    <NavBox>
      {/* {IconItems.map((item) => (
        <IconBox
          key={item.key}
          iconName={item.iconName}
          text={item.text}
          route={item.route}
        />
      ))} */}
      <NavLink to="/home">홈</NavLink>
      <NavLink to="/search">검색</NavLink>
      <NavLink to="/bookmarks">즐겨찾기</NavLink>
      <NavLink to="/accout">계정</NavLink>
    </NavBox>
  );
};

export default Navigation;