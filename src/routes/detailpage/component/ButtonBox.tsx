import html2canvas from "html2canvas";
import { styled } from "styled-components";

import Button from "../../../components/basics/button.component";
import { ReactComponent as Heart } from "../../../svg/Heartbeat.white.svg";
import { ReactComponent as Download } from "../../../svg/Download_light.svg";
import { saveAs } from "file-saver";
import { postFav } from "../../../utils/axios";
import Icon from "../../../components/icon/IconFactory.component";
import { useMutation } from "@tanstack/react-query";

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

const ButtonBox = ({ detailInfo }: any) => {
  const url: string = detailInfo.meme_url;
  const isFav: boolean = detailInfo.is_favorite;
  const id: number = detailInfo.pk;

  //CORS block
  const downloadImg = async () => {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = "test";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  function toDataURL(url: string) {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }

  /* const downloadImg = () => {
    saveAs(detailInfo.meme_url, "filename")
  } */

  const handleIsFav = async () => {
    postFav(id)
      .then((res) => console.log("Fav changed"))
      .catch((err) => console.error);
  };

  return (
    <>
      {detailInfo ? (
        <Wrapper className="button-box">
          <Button
            onClick={downloadImg}
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
            onClick={handleIsFav}
            border="1px solid white;"
            color="white"
            background="transparent"
            height="2.25rem"
            shadow="2px 2px 2px 0px rgba(0, 0, 0, 0.25)"
            borderradius="0.25rem"
          >
            <InsideContents className="button-inside">
              <ButtonLabel>즐겨찾기</ButtonLabel>
              <Icon icon="favorite" isActive={isFav} />
            </InsideContents>
          </Button>
        </Wrapper>
      ) : (
        <div />
      )}
    </>
  );
};

export default ButtonBox;
