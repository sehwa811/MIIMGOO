import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
`;

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    color: var(--typho-black-1);
    text-align: center;
    font-family: Spoqa Han Sans Neo;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.025rem;
  }

  span.numbers {
    color: var(--typho-grey-1);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  top: 1.25rem;
`

export const Label = styled.div`
  position: relative;
  width: 100%;
`;

export const Textinput = styled.input`
  width: 100%;
  height: 2.25rem;
  display: inline-flex;
  padding: 0.36981rem 0.75rem 0.44269rem 1rem;
  justify-content: flex-end;
  align-items: center;
  gap: 7.0625rem;
  background-color: transparent;
  border-radius: 0.5rem;
  border: 1px solid var(--typho-black-1);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);

  &::placeholder {
    color: var(--typho-grey-1);
    font-family: Spoqa Han Sans Neo;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.015rem;
  }
`;

export const InputButton = styled.button`
  width: fit-content;
  height: 1.4375rem;
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  border: 0.4px solid var(--typho-black-1);
  background: #0075FF;

  //text style
  color: #fff;
  font-family: Spoqa Han Sans Neo;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: -0.015rem;

  //position
  position: absolute;
  top: 0.44rem;
  right: 1rem;
`;

export const Comment = styled.div`
  display: flex;
  height: 2.9375rem;
  width: 21.875rem;
  padding: 1rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.625rem;

  border-radius: 0.5rem;
  border: 1px solid var(--typho-black-1);
  background: var(--main-white);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);
`;
