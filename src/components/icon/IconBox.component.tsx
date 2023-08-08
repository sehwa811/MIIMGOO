import { NavLink, useLocation } from "react-router-dom";

import styled from "styled-components";
import Icon, { IconType } from "./IconFactory.component";

interface IconBoxProps {
  iconName: IconType;
  text: string;
  route: string;
  key: number;
}

export const IconItems: IconBoxProps[] = [
  { iconName: "home", text: "홈", route: "/home", key: 1 },
  { iconName: "search", text: "검색", route: "/search", key: 2 },
  { iconName: "heartbeat", text: "즐겨찾기", route: "/bookmarks", key: 3 },
  { iconName: "user", text: "계정", route: "/account", key: 4 },
];

const StyledDiv = styled.div`
  display: flex;
  height: 4rem;
  width: 4.25rem;
  padding: 0.25rem 0rem;
  flex-direction: column;
  align-items: center;


  border-radius: 0.75rem;
  background: #0075ff;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

type textProp = {
  active: string;
};

const Text = styled.span<textProp>`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.015rem;
  color: ${(props) => (props.active === "active" ? "white" : "#C4C4C4")};
`;

const IconBox = ({ iconName, text, route }: IconBoxProps) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledDiv>
      <NavLink to={route}>
        <Icon icon={iconName} isActive={route === pathname} />
      </NavLink>
      <Text active={route === pathname ? "active" : "inactive"}>{text}</Text>
    </StyledDiv>
  );
};

export default IconBox;
