import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardBox = styled.div`
  width: 10.5rem;
  height: 10.6875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.25rem;

  gap: 0.625rem;
  border-radius: 0.75rem;
  border: 1px solid var(--typho-black-1);
  background: linear-gradient(180deg, #ff7a00 0%, rgba(255, 122, 0, 0) 100%);
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.4);
`;

const ImageBox = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border: 1px solid var(--typho-black-1);
  border-radius: 50%;

  img {
    width: 7.4rem;
    height: 7.4rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const TitleBox = styled.div`
  display: flex;
  width: 10rem;
  height: 1.4375rem;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: 1px solid var(--typho-black-1);
  background: var(--main-orange);
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);

  span {
    white-space: nowrap;
    overflow: hidden;
    color: var(--main-typho-black-1);

    font-family: Spoqa Han Sans Neo;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.015rem;
  }
`;

interface imagecardPrps {
  pk: number;
  url: string;
  title: string;
}

const BookmarkImageCard = ({ pk, url, title }: imagecardPrps) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${pk}`, { state: pk });
  };

  return (
    <CardBox onClick={goToDetail}>
      <ImageBox>
        <img src={url} />
      </ImageBox>
      <TitleBox>
        <span>{title}</span>
      </TitleBox>
    </CardBox>
  );
};

export default BookmarkImageCard;
