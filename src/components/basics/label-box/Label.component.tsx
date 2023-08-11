
import styled from "styled-components";

import { ReactComponent as Folder } from "../../../svg/Folder.svg";


const Wrapper = styled.div`
  display: flex;
  justify-content:space-between;
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.25rem;
  border: 1px solid var(--main-white, #fff);

  span {
    color: var(--main-white, #fff);
    text-align: center;
    font-family: Spoqa Han Sans Neo;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.025rem;
  }
`;

interface labelComponentProps {
  labelText: string;
}

const LabelComponent = ({labelText}:labelComponentProps) => {
  return (
    <Wrapper>
      <span>{labelText}</span>
      {/* icon */}
      <Folder />
    </Wrapper>
  );
};

export default LabelComponent;
