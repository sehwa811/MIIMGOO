import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.div`
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

const Textinput = styled.input`
  width: 100%;
  height: 2.25rem;
  display: flex;
  padding: 0.36981rem 0.75rem 0.44269rem 1rem;
  justify-content: flex-end;
  align-items: center;
  gap: 7.0625rem;
  background-color: transparent;

  border-radius: 0.5rem;
  border: 1px solid var(--typho-black-1);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);
`;

const Comment = styled.div`
  display: flex;
  height: 2.9375rem;
  width: 21.875rem;
  padding: 1rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;
  border: 1px solid var(--typho-black-1);
  background: var(--main-white);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);
`;

const CommentBox = () => {
  return (
    <Wrapper>
      <Title>
        <span>댓글</span>
        <span className="numbers">N</span>
      </Title>

      <Textinput />
      <Comment>dummy</Comment>
      <Comment>dummy</Comment>
      <Comment>dummy</Comment>
      <Comment>dummy</Comment>
      <Comment>dummy</Comment>
      <Comment>dummy</Comment>
    </Wrapper>
  );
};

export default CommentBox;
