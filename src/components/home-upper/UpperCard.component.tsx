import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectHomeImg } from "../../store/home-images/HomeImgSelector";

const CardBox = styled.div`
  width: 10.5rem;
  height: 16.1875rem;
  border-radius: 0.5rem;
  border: 1px solid var(--typho-black-1);
  background: linear-gradient(180deg, #ff7a00 0%, rgba(255, 122, 0, 0) 100%);
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.4);
  padding: 0.5rem;
`;

const ImageBox = styled.div`
  width: 9.5rem;
  height: 12.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--typho-black-1);

  img {
    width: 9.4rem;
    height: 12.4rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const UpperCardComponent = (imageData:any) => {
  const navigate = useNavigate();
  const { title, meme_url } = imageData;

  //수정
  const goToDetail = () => {
    //navigate(`/detail/${imageID}`)
    navigate("/detail");
  };

  return (

      <CardBox onClick={goToDetail}>
        <ImageBox><img src={meme_url} /></ImageBox>
        <div>{title}</div>
        <div>Likes</div>
      </CardBox>
  
  );
};

export default UpperCardComponent;
