import React, { useEffect, useState } from "react";

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
import TextInput from "./TextInput";
import TextInputComponent from "./TextInput";

const CommentComponent = (innerText: any) => {
  return (
    <Comment>
     {innerText}
    </Comment>
  );
};

const CommentBox = ({ id, comments }: any) => {

  const commentArray: string[] = [];
  const arrayReversed = comments.reverse();
  arrayReversed.forEach((item: any) => commentArray.push(item.description));
  console.log(commentArray);

  const components = [];

  for (let i = 0; i < commentArray.length; i++) {
    components.push(
    <Comment>{commentArray[i]}</Comment>
    )
  }
  
  return (
    <>
      {id ? (
        <Wrapper>
          <Title>
            <span>댓글</span>
            <span className="numbers">{commentArray.length}</span>
          </Title>

          <FlexBox>
              <TextInputComponent id={id} />
           
                {components}   
          </FlexBox>
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default React.memo(CommentBox);
