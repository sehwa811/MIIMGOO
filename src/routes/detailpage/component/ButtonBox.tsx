import { styled } from "styled-components";
import Button from "../../../components/basics/button.component";

import { ReactComponent as Heart } from "../../../svg/Heartbeat.white.svg";
import { ReactComponent as Download } from "../../../svg/Download_light.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ButtonLabel = styled.span`
  color: var(--main-white);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

const InsideContents = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ButtonBox = () => {
  return (
    <Wrapper className="button-box">
      <Button
        color="white"
        background="#0075FF"
        border="1px solid #000;"
        height="2.25rem"
        shadow="2px 2px 2px 0px rgba(0, 0, 0, 0.25)"
        borderradius="0.25rem"
      >
        <InsideContents className="button-inside">
          <ButtonLabel>다운로드</ButtonLabel>
          <Download />
        </InsideContents>
      </Button>

      <Button
        border="1px solid white;"
        color="white"
        background="transparent"
        height="2.25rem"
        shadow="2px 2px 2px 0px rgba(0, 0, 0, 0.25)"
        borderradius="0.25rem"
      >
        <InsideContents className="button-inside">
          <ButtonLabel>즐겨찾기</ButtonLabel>
          <Heart />
        </InsideContents>
      </Button>
    </Wrapper>
  );
};

export default ButtonBox;
