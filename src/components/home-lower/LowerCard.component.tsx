import styled from "styled-components";

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15.25rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  border-radius: 0.5rem;
  border: 1px solid #000;
  background: linear-gradient(180deg, #0075ff 0%, rgba(0, 117, 255, 0.2) 100%);
`;

const ImageLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1.75rem;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border: 1px solid var(--typho-black-1);
  background: #fff;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.4);
`;

const ImageBox = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 0.5rem;
  border: 2px solid var(--typho-black-1);
`;

const LowerCardComponent = () => {
  return (
    <CardBox>
      <ImageLabel className="image-label">Title</ImageLabel>
      <ImageBox className="image-display">imageFile</ImageBox>
      <div className="likes">Likes</div>
    </CardBox>
  );
};

export default LowerCardComponent;
