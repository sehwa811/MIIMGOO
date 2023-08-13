import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import ImageInfo from "./component/ImageInfo.component";
import ButtonBox from "./component/ButtonBox";
import CommentBox from "./component/CommentBox/CommentBox";
import LogoPart from "./component/LogoPart";
import { getHomeImg, getImgDetail } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  position:relative;
  top: 2.12rem;
  padding-bottom:2rem;
`;

export default function Detail() {
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


  useEffect(() => {
    if (data) {
      setDetailInfo(data);
      setComments(data.comment);
      setId(data.pk);
    }
  }, [data]);

  return (
    <div>
      {detailInfo ? (
        <div>
          <LogoPart />
          <ContentsBox className="detail-contents-box">
            <ImageInfo detailInfo={detailInfo} />
            <ButtonBox detailInfo={detailInfo} />
            <CommentBox id={id} comments={comments} />
          </ContentsBox>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
