import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getSearchResult } from "../../utils/axios";
import { useLocation } from "react-router-dom";
import { CardBox } from "../../components/home-upper/HomeUpper.component";
import UpperCardComponent from "../../components/home-upper/UpperCard.component";

const SearchResultPage = () => {
  const { state } = useLocation();

  //console.log(state);
  const SearchParams: any = {
    tags: ["hhh"],
  };
  const params = new URLSearchParams(SearchParams);
  const { data, isError, isLoading } = useQuery(["searchresult", state], () =>
    getSearchResult(state)
  );


  const results = [];

  console.log(...Object.values(data));
  

  return (
    <>{isLoading ? <></> :(<CardBox>{/* <UpperCardComponent /> */}</CardBox>)}</>
  );
};

export default SearchResultPage;
