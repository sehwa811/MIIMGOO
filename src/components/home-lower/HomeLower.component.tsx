import LabelComponent from "../basics/label-box/Label.component";

import { lowerText } from "../basics/label-box/label-text";

import styled from "styled-components";
import LowerCardComponent from "./LowerCard.component";



const HomeLowerComponent = () => {
  return (
    <>
      <div className="lower-body">
        <LabelComponent labelText={lowerText} />

        <LowerCardComponent />
        <LowerCardComponent />
        <LowerCardComponent />
      </div>
    </>
  );
};

export default HomeLowerComponent;