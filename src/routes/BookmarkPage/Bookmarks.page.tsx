import { useQuery } from "@tanstack/react-query";
import LabelComponent from "../../components/basics/label-box/Label.component";
import LogoPart from "../../components/LogoPart";
import { getFavImages } from "../../utils/axios";
import { ReactElement, useEffect, useState } from "react";
import BookmarkImageCard from "./BookmarkImageCard";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/UserInfoReducer";
import LoadingComponent from "../SubPage/Loading";
import UserOnlyAlert from "../../components/basics/UseronlyAlert.component";
import { BigWrapper } from "../Homepage/Home.page";

const Wrapper = styled.div``;

const ImageCardBox = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem 0.5rem;
  flex-wrap: wrap;
  position: relative;
  top: 2.45rem;
  padding-bottom: 2rem;
`;

export default function BookmarksPage() {
  const { data, isError, isLoading } = useQuery(["favImages"], getFavImages, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [favData, setFavData] = useState<any>([]);

  const components: ReactElement[] = [];
  useEffect(() => {
    if (data) {
      const array: any = Object.values(data)[0];
      setFavData(array);
    }
  }, [data]);

  for (let i = 0; i < favData.length; i++) {
    const imageInfo = favData[i].meme;
    components.push(
      <BookmarkImageCard
        pk={imageInfo.pk}
        url={imageInfo.meme_url}
        title={imageInfo.title}
      />
    );
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          {isLoading ? (
            <div></div>
          ) : (
            <BigWrapper>
              <LogoPart />
              <LabelComponent top="1.19rem" labelText="즐겨찾기" />
              <ImageCardBox className="bookmarks-imagecards">
                {components}
              </ImageCardBox>
            </BigWrapper>
          )}
        </div>
      ) : (
        <UserOnlyAlert />
      )}
    </div>
  );
}
