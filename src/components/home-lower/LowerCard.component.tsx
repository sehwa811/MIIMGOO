import styled from "styled-components";

const CardBox = styled.div`
  display: flex;
  width: 100%;
  height: 15.25rem;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;
  border: 1px solid #000;
  background: linear-gradient(180deg, #0075ff 0%, rgba(0, 117, 255, 0.2) 100%);
`;

const LowerCardComponent = () => {
  return (
    <CardBox>
      <div className="image-label"></div>
      <div className="image-display"></div>
      <div className="likes"></div>
    </CardBox>
  );
};

export default LowerCardComponent;
