import LabelComponent from "../basics/label-box/Label.component";
import UpperCardComponent from "./UpperCard.upper.component";

import styled from "styled-components";

const CardBox = styled.div`
    display: flex;
   
`

const HomeUpperComponent = () => {
    return (
        <div>
            <LabelComponent />
            <CardBox>
                <UpperCardComponent />
                <UpperCardComponent />
            </CardBox>
            <CardBox>
                <UpperCardComponent />
                <UpperCardComponent />
            </CardBox>
        </div>
    )
};

export default HomeUpperComponent;