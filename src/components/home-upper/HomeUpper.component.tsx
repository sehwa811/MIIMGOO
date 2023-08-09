import LabelComponent from "../basics/label-box/Label.component";
import UpperCardComponent from "./UpperCard.component";

import { upperText, lowerText } from "../basics/label-box/label-text";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHomeImg } from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { setHomeImage } from "../../store/home-images/HomeImgAction";
import { useNavigate } from "react-router-dom";
import { selectHomeImg } from "../../store/home-images/HomeImgSelector";
import { useMutation } from "@tanstack/react-query";

const UpperBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeUpperComponent = () => {
  const dispatch = useDispatch();
  
  const [state, setState] = useState();

  const rawData:any = useSelector(selectHomeImg);
  const imageArray: any = Object.values(rawData);

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
            <UpperCardComponent imageData={imageArray[0]} />
            <UpperCardComponent imageData={imageArray[1]} />
          </CardBox>
          <CardBox>
            <UpperCardComponent imageData={imageArray[2]} />
            <UpperCardComponent imageData={imageArray[3]} />
          </CardBox>
        </UpperBody>
      
    </>
  );
};

export default HomeUpperComponent;
