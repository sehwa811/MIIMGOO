import { ReactComponent as Folder } from "../../../svg/Folder.svg";

import styled from "styled-components";
import TagListComponent from "./TagList/TagList";

const ImageInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const ImageAndTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`;

const ImageTitleBox = styled.div`
  width: 100%;
  display: flex;
  height: 2.5625rem;
  padding: 0.5rem 1.25rem 0.5rem 0.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 7.125rem;
  border-radius: 0.25rem;
  border: 1px solid var(--main-white);
`;

const TitleSpan = styled.span`
  color: var(--main-white);
  max-width: 17rem;
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.03rem;
  white-space: nowrap;
  overflow: hidden;
`;

const ImageDisplay = styled.div`
  width: 16.25rem;
  height: 20rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid black;
  border-radius: 0.25rem;

  img {
    width: 16.24rem;
    height: 19.9rem;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

//props: imageFIle, imageTitle, tag list
const ImageInfo = ({ detailInfo }: any) => {
  const tagList = detailInfo.tags;
  const tagValues: string[] = [];

  for (const item in tagList) {
    tagValues.push(tagList[item].name);
  }

  return (
    <>
      {detailInfo ? (
        <ImageInfoWrapper className="image-info">
          <ImageTitleBox>
            <TitleSpan>{detailInfo.title}</TitleSpan>
            <Folder />
          </ImageTitleBox>

          <ImageAndTag>
            <ImageDisplay>
              <img id={detailInfo.meme_url} src={detailInfo.meme_url} />
            </ImageDisplay>

            <TagListComponent tags={tagValues} />
          </ImageAndTag>
        </ImageInfoWrapper>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ImageInfo;
