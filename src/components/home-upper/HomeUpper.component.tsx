import LabelComponent from "../basics/label-box/Label.component";
import UpperCardComponent from "./UpperCard.upper.component";

import styled from "styled-components";

const HomeUpperComponent = () => {
    return (
        <div>
            <LabelComponent />
            <div>
                <UpperCardComponent />
                <UpperCardComponent />
            </div>
        </div>
    )
};

export default HomeUpperComponent;