import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import ImageInfo from "./ImageInfo.component";
import ButtonBox from "./ButtonBox";
import CommentBox from "./CommentBox";
import LogoPart from "../../components/LogoPart";
import { getHomeImg, getImgDetail } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";
import { BigWrapper } from "../Homepage/Home.page";

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  position: relative;
  top: 2.12rem;
  padding-bottom: 2rem;
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
        <BigWrapper>
          <LogoPart />
          <ContentsBox className="detail-contents-box">
            <ImageInfo detailInfo={detailInfo} />
            <ButtonBox detailInfo={detailInfo} />
            <CommentBox id={id} comments={comments} />
          </ContentsBox>
        </BigWrapper>
      ) : (
        <div></div>
      )}
    </div>
  );
}
