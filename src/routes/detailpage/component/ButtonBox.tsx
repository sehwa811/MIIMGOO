import html2canvas from "html2canvas";
import { styled } from "styled-components";

import Button from "../../../components/basics/button.component";
import { ReactComponent as Heart } from "../../../svg/Heartbeat.white.svg";
import { ReactComponent as Download } from "../../../svg/Download_light.svg";
import { saveAs } from "file-saver";
import { getBlob, postFav } from "../../../utils/axios";
import Icon from "../../../components/icon/IconFactory.component";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
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

  const blobMutate = useMutation(getBlob, {
    onSuccess: ({ data, type, filename }) => {
      if (data && type && filename) {
        // base64 문자열을 바이트 배열로 디코딩
        const byteCharacters = atob(data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray], { type: type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    },
  });

  const downloadImg = async () => {
    blobMutate.mutate(url);
  };

  const queryClient = useQueryClient();

  const handleIsFav = () => {
    favortites.mutate(id);
  };

  const favortites = useMutation(postFav, {
    onSuccess: () => {
      queryClient.resetQueries(["imageDetail", id]);
    },
  });

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
