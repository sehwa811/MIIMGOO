import { useState } from "react";

import {
  Wrapper,
  Title,
  Textinput,
  Comment,
  InputButton,
  Label,
  FlexBox,
} from "./CommentBox.styles";

const CommentBox = () => {
  return (
    <Wrapper>
      <Title>
        <span>댓글</span>
        <span className="numbers">N</span>
      </Title>

      <FlexBox>
        <Label>
          <Textinput placeholder="|   20자 내로 댓글을 남겨주세요:)" />
          <InputButton>등록</InputButton>
        </Label>

        <Comment>dummy</Comment>
        <Comment>dummy</Comment>
        <Comment>dummy</Comment>
        <Comment>dummy</Comment>
        <Comment>dummy</Comment>
        <Comment>dummy</Comment>
        
      </FlexBox>
    </Wrapper>
  );
};

export default CommentBox;
