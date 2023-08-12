import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getSearchResult } from "../../utils/axios";
import { useLocation } from "react-router-dom";
import { CardBox } from "../../components/home-upper/HomeUpper.component";
import UpperCardComponent from "../../components/home-upper/UpperCard.component";
import { useEffect, useState } from "react";
import LogoPart from "../detailpage/component/LogoPart";

const SelectedTagsBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 0.75rem;
`;

const SearchResultPage = () => {
  const { state } = useLocation();

  const [resultData, setResultData] = useState([]);

  console.log(state);
  const SearchParams: any = {
    tags: state,
  };
  const params = new URLSearchParams(SearchParams);
  const { data, isError, isLoading } = useQuery(["searchresult", params], () =>
    getSearchResult(state)
  );

  const results: any = [];
  useEffect(() => {
    if (data) {
      /* const values = Object.values(data);
      console.log(values);
      for (const i of values) {
        const value: any = i;
        results.push(...value);
      }
      console.log(results); */
      setResultData(results);
    }
  }, [data]);

  console.log(resultData);

  return (
    <>
      <LogoPart />
      <SelectedTagsBox>{state}</SelectedTagsBox>

      {resultData ? (
        resultData.map((item) => <UpperCardComponent image={item} />)
      ) : (
        <>데이터를 불러오고 있습니다...</>
      )}
    </>
  );
};

export default SearchResultPage;
