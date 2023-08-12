import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FavBox } from "../home-upper/UpperCard.component";
import { ReactComponent as Favs } from "../home-upper/Heartbeat.white.svg";

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15.25rem;
  justify-content: space-between;
  align-items: start;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #000;
  background: linear-gradient(180deg, #0075ff 0%, rgba(0, 117, 255, 0.2) 100%);
`;

const ImageLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1.75rem;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  color: var(--main-blue);
  border: 1px solid var(--typho-black-1);
  background: #fff;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.4);
`;

const ImageBox = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 0.5rem;
  border: 2px solid var(--typho-black-1);

  img {
    width: 100%;
    height: 9.8rem;
    border-radius: 0.5rem;
  }

  img.cover {
    object-fit: cover;
  }
`;

const LowerFavBox = styled(FavBox)`
  position: relative;
`;

interface lowercardProps {
  image: any;
}

const LowerCardComponent = ({ image = null }: lowercardProps) => {
  const navigate = useNavigate();

  //수정
  const goToDetail = () => {
    navigate(`/detail/${image.pk}`, { state: image.pk });
  };

  return (
    <>
      {image ? (
        <CardBox onClick={goToDetail}>
          <ImageLabel className="image-label">{image.title}</ImageLabel>
          <ImageBox className="image-display">
            <img src={image.meme_url} className="cover" />
          </ImageBox>
          <LowerFavBox className="likes">
            <Favs />
            <span>{image.favorites}</span>
          </LowerFavBox>
        </CardBox>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default LowerCardComponent;
