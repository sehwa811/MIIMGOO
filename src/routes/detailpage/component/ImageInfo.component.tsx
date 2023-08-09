import { ReactComponent as Folder } from "../../../svg/Folder.svg";

import styled from "styled-components";

const ImageInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageTitleBox = styled.div`
  width: 19rem;
  height: 3.125rem;
  display: inline-flex;
  padding: 0.625rem 0.625rem 0.625rem 0.75rem;
  justify-content: space-around;
  align-items: center;
  gap: 2.5rem;

  border-radius: 0.5rem;
  border: 1px solid var(--main-white);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.7);
`;

const TitleSpan = styled.span`
  color: var(--main-white);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.03rem;
`;

const ImageDisplay = styled.div`
  width: 16.25rem;
  height: 20rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid black;
  border-radius: 0.25rem;

  img {
    width: 16.24rem;
    height: 19rem;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

const TagList = styled.div``;

//props: imageFIle, imageTitle, tag list
const ImageInfo = () => {
  return (
    <ImageInfoWrapper className="image-info">
      <ImageTitleBox>
        <TitleSpan>TitleTitleTitleTitle</TitleSpan>
        <Folder />
      </ImageTitleBox>

      <ImageDisplay>Image display</ImageDisplay>

      <div>Tag list</div>
    </ImageInfoWrapper>
  );
};

export default ImageInfo;
