import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ButtonStyle {
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
  background?: string;
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
  padding: 12px 40px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid;
  width: 100%;
  height: 48px;
  color: var(--main-white-1, #fff);
  border-radius: 12px;
  border-color: var(--sleeper-blue-1, #5581f1);
  background: ${(props)=> props.background || "var(--sleeper-blue-1, #5581f1)"};
`;

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
      <StyledButton className={className} {...rest}>
        {children}
      </StyledButton>
  );
}

export default Button;