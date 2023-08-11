import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import ImageInfo from "./component/ImageInfo.component";
import ButtonBox from "./component/ButtonBox";
import CommentBox from "./component/CommentBox/CommentBox";
import LogoPart from "./component/LogoPart";
import { getHomeImg, getImgDetail } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";

export default function Detail() {
  const { imageID } = useParams();

  const { state } = useLocation();

  const [detailInfo, setDetailInfo] = useState<any>([]);

  const [comments, setComments] = useState<any>([]);
  const [id, setId] = useState<number>(0);


  const { data, isError, isLoading } = useQuery(
    ["imageDetail", state],
    () => getImgDetail(state),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  //image 정보 get
  useEffect(() => {
    if (data) {
      console.log(data);
      setDetailInfo(data);
      console.log(data.comment);
      setComments(data.comment);
      setId(data.pk);
    }
  }, [data]);

  return (
    <div>
      {detailInfo ? (
        <div>
          <LogoPart />
          <ImageInfo detailInfo={detailInfo} />
          <ButtonBox detailInfo={detailInfo} />
          <CommentBox id={id} comments={comments} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
