import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ImageInfo from "./component/ImageInfo.component";
import ButtonBox from "./component/ButtonBox";
import CommentBox from "./component/CommentBox/CommentBox";
import LogoPart from "./component/LogoPart";

export default function Detail() {
  const { imageID } = useParams();
  //const thisImage = ImgData.find(item => item.id === imageID)

  //image 정보 get
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
