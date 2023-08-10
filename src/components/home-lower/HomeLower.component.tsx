import LabelComponent from "../basics/label-box/Label.component";

import { lowerText } from "../basics/label-box/label-text";

import styled from "styled-components";
import LowerCardComponent from "./LowerCard.component";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getHomeImg } from "../../utils/axios";

const LowerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  top: 1.75rem;
`;

const HomeLowerComponent = () => {
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
        <LowerBody className="lower-body">
          <LabelComponent labelText={lowerText} />
          <LowerCardComponent image={rawData[0]} />
          <LowerCardComponent image={rawData[1]} />
          <LowerCardComponent image={rawData[2]} />
          <LowerCardComponent image={rawData[3]} />
        </LowerBody>
      )}
    </>
  );
};

export default HomeLowerComponent;
