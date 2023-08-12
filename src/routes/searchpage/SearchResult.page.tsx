import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getSearchResult } from "../../utils/axios";
import { useLocation } from "react-router-dom";
import { CardBox } from "../../components/home-upper/HomeUpper.component";
import UpperCardComponent from "../../components/home-upper/UpperCard.component";
import { useEffect, useState } from "react";
import LogoPart from "../detailpage/component/LogoPart";

import { ReactComponent as Close } from "./Close.svg";

const SelectedTagsBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  position: relative;
  top: 1.63rem;
`;

const TagComponent = styled.div`
  width: fit-content;
  height: 1.75rem;
  display: flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  border: 0.4px solid var(--typho-black-1);
  background: var(--main-orange);

  span {
    color: var(--main-white);
    font-family: Spoqa Han Sans Neo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.02rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem 0.5rem;
  flex-wrap: wrap;
  position: relative;
  top: 2.45rem;
  padding-bottom: 2rem;
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
      console.log(data);
      const values = Object.values(data);
      console.log(values);
      for (const i of values) {
        const value: any = i;
        results.push(...value);
      }
      console.log(results);
      setResultData(results);
    }
  }, [data]);

  const selectedArray = [];
  for (let i = 0; i < state.length; i++) {
    selectedArray.push(
      <TagComponent>
        <span>{`#${state[i]}`}</span>
        <Close />
      </TagComponent>
    );
  }

  return (
    <>
      <LogoPart />
      <SelectedTagsBox>{selectedArray}</SelectedTagsBox>

      <Wrapper className="search-result-images">
        {resultData ? (
          resultData.map((item) => <UpperCardComponent image={item} />)
        ) : (
          <>데이터를 불러오고 있습니다...</>
        )}
      </Wrapper>
    </>
  );
};

export default SearchResultPage;
