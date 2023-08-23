import styled from "styled-components";


interface Itb {
  isfav:boolean;
}

export const TagBox = styled.div<Itb>`
  width: fit-content;
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid var(--typho-black-1);
  background-color: var(--main-white);

  span {
    color: var(--typho-black-1, #111);
    font-family: Spoqa Han Sans Neo;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.015rem;
  }
`;

interface tagProps {
  tag: string;
}

const TagComponent = ({ tag }: tagProps) => {
  return (
    <TagBox className="tag" isfav={false}>
      <span>{`#${tag}`}</span>
    </TagBox>
  );
};

export default TagComponent;
