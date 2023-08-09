import LabelComponent from "../basics/label-box/Label.component";
import UpperCardComponent from "./UpperCard.component";

import { upperText, lowerText } from "../basics/label-box/label-text";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHomeImg } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setHomeImage } from "../../store/home-images/HomeImgAction";

const UpperBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CardBox = styled.div`
  display: flex;
`;

const HomeUpperComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const callAPIfunc = async () => {
      const data = await getHomeImg();
      dispatch(setHomeImage(data));
    };
    callAPIfunc();
  }, []);

  return (
    <>
      <UpperBody className="upper-body">
        <LabelComponent labelText={upperText} />
        <CardBox>
          <UpperCardComponent />
          <UpperCardComponent />
        </CardBox>
        <CardBox>
          <UpperCardComponent />
          <UpperCardComponent />
        </CardBox>
      </UpperBody>
    </>
  );
};

export default HomeUpperComponent;
