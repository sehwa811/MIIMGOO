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
import { useMutation, useQuery } from "@tanstack/react-query";

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
  const [rawData, setRawData] = useState("");

  const { data, isError, isLoading } = useQuery(["homeimage"], getHomeImg, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (data) {
      setRawData(data);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <UpperBody className="upper-body">
          <LabelComponent labelText={upperText} />
          <CardBox>
            <UpperCardComponent image={rawData[0]} />
            <UpperCardComponent image={rawData[1]} />
          </CardBox>
          <CardBox>
            <UpperCardComponent image={rawData[2]} />
            <UpperCardComponent image={rawData[3]} />
          </CardBox>
        </UpperBody>
      )}
    </>
  );
};

export default HomeUpperComponent;
