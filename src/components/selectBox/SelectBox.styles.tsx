import styled from 'styled-components';


type selectBoxProps = {
  ref?: any;
}

export const SelectBox = styled.div<selectBoxProps>`
  position: relative;
  background-color: white;
  border-radius: 0.25rem;
  border: 1.4px solid var(--gray-4, #dbdbdb);
  background: #fff;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.4);
  width: 13.75rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
`;

export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8.75rem;

  label {
    color: var(--gray-1, #4d4d4d);
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.015rem;
  }
`;

export type state = {
  show?: boolean;
  height?: string;
};

export const SelectOptions = styled.ul<state>`
  position: absolute;
  list-style: none;
  top: 3.2rem;
  left: -0.08em;
  width: fit-content;
  height: ${(props)=> props.height};
  overflow-y: scroll;
  padding-left: 0;
  z-index: 3;

  display: ${(props) => (props.show ? "show" : "none")};
  background-color: white;
  border-radius: 0.25rem;
  border: 1.6px solid transparent;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(#FFF, #FFF),
    linear-gradient(to bottom, #734ef7 0%, #6b85f7 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

/* type optionProps = {
  clicked: boolean
} */

type optionType = {
  ref?: any;
}

export const Option = styled.li<optionType>`
  width: 13.7rem;
  height: 2rem;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  margin-left: 0;
  color: var(--gray-1, #4d4d4d);
  z-index: 3;
  text-align: left;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: fit-content;
  text-align: center;
  gap: 1rem;
  position: relative;
  top: 1.25rem;
`;

export type isactive = {
  active: boolean;
};