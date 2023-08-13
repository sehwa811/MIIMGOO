import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ButtonStyle {
  width?: string;
  height?: string;
  background?: string;
  border?: string;
  color?: string;
  shadow?: string;
  borderradius?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className?: string;
}

const StyledButton = styled.button<ButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 6.5rem 0.875rem 6.5625rem;
  flex-shrink: 0;
  border-radius: ${(props) => props.borderradius || "0.5rem"};
  border: ${(props)=> props.border || "0.4px solid var(--main-grey-1)"};
  width: 21.875rem;
  height: ${(props)=> props.height || "3rem"};
  color: ${(props)=> props.color || "var(--main-typho-grey-1)"};
  background: ${(props)=> props.background || "white"};
  box-shadow: ${(props)=> props.shadow};
`;

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
      <StyledButton className={className} {...rest}>
        {children}
      </StyledButton>
  );
}

export default Button;