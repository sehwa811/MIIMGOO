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
import { postComment } from "../../utils/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TextInputComponent = ({ id }: any) => {
  const [text, setText] = useState("");

  const queryClient = useQueryClient();
  const ButtonClick = async () => {
    setText("");
    commentUpdate.mutate({ id, text });
  };

  const commentUpdate = useMutation(postComment, {
    onSuccess: () => {
      queryClient.resetQueries(["imageDetail", id]);
    },
  });

  return (
    <Label className="text-input">
      <Textinput
        value={text}
        onChange={(e: any) => setText(e.target.value)}
        placeholder="|   200자 내로 댓글을 남겨주세요:)"
      />
      <InputButton onClick={ButtonClick}>등록</InputButton>
    </Label>
  );
};

export default TextInputComponent;
