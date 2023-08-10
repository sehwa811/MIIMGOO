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
import { useMutation } from "@tanstack/react-query";
import { postComment } from "../../../../utils/axios";

const CommentBox = ({ detailInfo }: any) => {
  const [text, setText] = useState<string>("");

  const ButtonClick = async () => {
    setText("");
    await postComment(detailInfo.pk, text)
    .then((res)=>console.log(res)).catch((err)=>console.error(err));
    
  };

  return (
    <Wrapper>
      <Title>
        <span>댓글</span>
        <span className="numbers">N</span>
      </Title>

      <FlexBox>
        <Label>
          <Textinput
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            placeholder="|   20자 내로 댓글을 남겨주세요:)"
          />
          <InputButton onClick={ButtonClick}>등록</InputButton>
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
