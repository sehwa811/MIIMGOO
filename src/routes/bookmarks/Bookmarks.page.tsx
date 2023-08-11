import { useQuery } from "@tanstack/react-query";
import LabelComponent from "../../components/basics/label-box/Label.component";
import LogoPart from "../detailpage/component/LogoPart";
import { getFavImages } from "../../utils/axios";
import { useEffect, useState } from "react";
import BookmarkImageCard from "./BookmarkImageCard";

export default function BookmarksPage() {
  const { data, isError, isLoading } = useQuery(["favImages"], getFavImages, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const [favData, setFavData] = useState();

  useEffect(() => {
    if (data) {
      const array:any = Object.values(data)[0];
      console.log(array[0])
    }
  });

  return (
    <div>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <LogoPart />
          <LabelComponent labelText="즐겨찾기" />
          <BookmarkImageCard />
        </>
      )}
    </div>
  );
}
