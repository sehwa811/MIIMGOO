import styled from "styled-components";
import Button from "./button.component";

interface modalProps {
  success: boolean;
  isModalOpen: boolean;
  close?(): void;
  successFunc?(): void;
  label: string;
  additional?: any;
  width: string;
  height: string;
  background: string;
  textColor: string;
  dimmed: string;
  fontSize?: string;
}

interface defaultPropsType {
  width: string;
  height: string;
  background: string;
}

export const Wrapper = styled.div<defaultPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  border: none;
  border-radius: 20px;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type dimmedProp = {
  dimmed: string;
};

export const ModalBackdrop = styled.div<dimmedProp>`
  //딤처리
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.dimmed};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: fit-content;
  height: fit-content;
`;

export const Body = styled.div`
  height: fit-content;
  position: relative;
  top: -1rem;
`;

type TextColor = {
  textColor: string;
  fontSize?: string;
};

export const Label = styled.h6<TextColor>`
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: center;
  margin-bottom: 0;
  white-space: pre-wrap;
  color: ${(props) => props.textColor};
`;

export const Contents = styled.h6<TextColor>`
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: center;
  position: relative;
  top: 16px;
  margin-bottom: 0;
  white-space: pre-wrap;
  color: ${(props) => props.textColor};
  height: width;
`;

export const ModalButton = styled(Button)`
  display: flex;
  width: 300px;
  height: 52px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: 16px;
  position: relative;
  top: 1.5rem;
`;
