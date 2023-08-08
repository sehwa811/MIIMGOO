import LabelComponent from "../basics/label-box/Label.component";

import { lowerText } from "../basics/label-box/label-text";

import styled from "styled-components";
import LowerCardComponent from "./LowerCard.component";

const LowerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  top: 1.75rem;
`;

const HomeLowerComponent = () => {
  return (
    <>
      <LowerBody className="lower-body">
        <LabelComponent labelText={lowerText} />

        <LowerCardComponent />
        <LowerCardComponent />
        <LowerCardComponent />
      </LowerBody>
    </>
  );
};

export default HomeLowerComponent;
