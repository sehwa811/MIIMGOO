
import { Wrapper, ModalBackdrop, InsideBox, Body, Label, Contents, ModalButton } from "./modal.styles";

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
                  {label.split("\n").map((letter, index) => (
                    <div key={index}>
                      {letter}
                      <br />
                    </div>
                  ))}
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
  width: "330px",
  height: "180px",
  background: "#FFF",
  textColor: "#4D4D4D",
  dimmed: "rgba(0, 0, 0, 0.60);",
};

export default Modal;