import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ImageInfo from "./ImageInfo.component";
import ButtonBox from "./ButtonBox";
import CommentBox from "./CommentBox";
import LogoPart from "./LogoPart";

export default function Detail() {
  const { imageID } = useParams();
  //const thisImage = ImgData.find(item => item.id === imageID)

  useEffect(() => {});

  return (
    <div>
      <LogoPart />
      <ImageInfo />
      <ButtonBox />
      <CommentBox />
    </div>
  );
}
