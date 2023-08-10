import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectHomeImg } from "../../store/home-images/HomeImgSelector";
import { useQuery } from "@tanstack/react-query";
import { getHomeImg } from "../../utils/axios";
import { useEffect, useState } from "react";

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

interface uppercardProps {
  image: any;
}

const UpperCardComponent = ({ image = null }: uppercardProps) => {
  const navigate = useNavigate();

  //수정
  const goToDetail = () => {
    navigate(`/detail/${image.pk}`, { state: image.pk })
  };

  return (
    <>
      {image ? (
        <CardBox onClick={goToDetail}>
          <ImageBox>
            <img src={image.meme_url} />
          </ImageBox>
          <div>{image.title}</div>
          <div>{image.favorites}</div>
        </CardBox>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default UpperCardComponent;
