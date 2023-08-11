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
import { postComment } from "../../../../utils/axios";

const TextInputComponent = ({ id }: any) => {
    const [text, setText] = useState<string>("");

    const ButtonClick = async () => {
        setText("");
        await postComment(id, text)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      };
    

  return (
    <Label>
      <Textinput
        value={text}
        onChange={(e: any) => setText(e.target.value)}
        placeholder="|   20자 내로 댓글을 남겨주세요:)"
      />
      <InputButton onClick={ButtonClick}>등록</InputButton>
    </Label>
  );
};

export default TextInputComponent;