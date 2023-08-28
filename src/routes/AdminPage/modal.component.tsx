import styled from "styled-components";

interface modalProps {
  success?: boolean;
  isModalOpen?: boolean;
  close?(): void;
  successFunc?(): void;
  label?: string;
  additional?: any;
  width?: string;
  height?: string;
  background?: string;
  textColor?: string;
  dimmed?: string;
  fontSize: string;
}

interface defaultPropsType {
  width?: string;
  height?: string;
  background?: string;
}

const Wrapper = styled.div<defaultPropsType>`
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
  dimmed?: string;
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

const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  height: fit-content;
`;

const Body = styled.div`
  height: fit-content;
  position: relative;
  
`;

type TextColor = {
  textColor?: string;
  fontSize?: string;
};

const Label = styled.h6<TextColor>`
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

const Contents = styled.h6<TextColor>`
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

const ModalButton = styled.button`
  display: flex;
width: 17.5rem;
padding: 0.75rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
border: 1px solid #000;
background: #0075FF;
box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
color: var(--main-white, #FFF);
text-align: center;
font-family: Spoqa Han Sans Neo;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.015rem;
`;

const Modal = ({
  success,
  isModalOpen,
  additional,
  label,
  close,
  successFunc,
  width,
  height,
  background,
  textColor,
  dimmed,
  fontSize,
}: modalProps) => {
  return (
    <div>
      {isModalOpen && (
        <ModalBackdrop dimmed={dimmed}>
          <Wrapper width={width} height={height} background={background}>
            <InsideBox>
              <Body>
                <Label textColor={textColor} fontSize={fontSize}>
                  정말 로그아웃 하시겠습니까?
                </Label>
                {additional ? (
                  <Contents textColor={textColor}>{additional}</Contents>
                ) : null}
              </Body>
              <ModalButton
                className="close"
                onClick={success ? successFunc : close}
              >
                확인
              </ModalButton>
            </InsideBox>
          </Wrapper>
        </ModalBackdrop>
      )}
    </div>
  );
};

Modal.defaultProps = {
  width: "20.625rem",
  height: "5rem ",
  background: "#FFF",
  textColor: "#4D4D4D",
  dimmed: "rgba(0, 0, 0, 0.80);",
};

export default Modal;