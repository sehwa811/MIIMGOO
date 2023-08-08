import LabelComponent from "../basics/label-box/Label.component";
import UpperCardComponent from "./UpperCard.component";

import { upperText, lowerText } from "../basics/label-box/label-text";

import styled from "styled-components";

const UpperBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

const CardBox = styled.div`
  display: flex;
`;

const HomeUpperComponent = () => {
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
