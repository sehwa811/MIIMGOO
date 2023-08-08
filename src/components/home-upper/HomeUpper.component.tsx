import LabelComponent from "../basics/label-box/Label.component";
import UpperCardComponent from "./UpperCard.component";

import { upperText, lowerText } from "../basics/label-box/label-text";

import styled from "styled-components";

const CardBox = styled.div`
  display: flex;
`;

const HomeUpperComponent = () => {
  return (
    <>
      <div className="upper-body">
        <LabelComponent labelText={upperText} />
        <CardBox>
          <UpperCardComponent />
          <UpperCardComponent />
        </CardBox>
        <CardBox>
          <UpperCardComponent />
          <UpperCardComponent />
        </CardBox>
      </div>

    </>
  );
};

export default HomeUpperComponent;
