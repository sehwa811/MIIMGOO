import { useQuery } from "@tanstack/react-query";
import LogoPart from "../detailpage/component/LogoPart";
import { getTagsList } from "../../utils/axios";
import { useEffect, useState } from "react";
import { TagBox } from "../detailpage/component/TagList/Tag.component";

import styled from "styled-components";
import Category from "./Categories";
import SelectedTags from "./SelectedTag.component";
import { useDispatch, useSelector } from "react-redux";
import { dispatchToReducer } from "../../store/tags/TagAction";
import { selectTags } from "../../store/tags/TagSelector";
import { selectSearchTags } from "../../store/searchTags/SearchTagSelector";
import { searchTagAdd } from "../../store/searchTags/SearchTagAction";

const CategoriesBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: var(--main-white);
  /* Main_Bold5 */
  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SearchTagBox = styled(TagBox)`
  width: fit-content;
  height: 2.25rem;
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: 1px solid #000;
  background: #fff;

  span {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.02rem;
  }
`;
interface tagProps {
  tag: string;
  onClick(e:any): void; 
}

const TagComponent = ({ tag, onClick }: tagProps) => {
  return (
    <SearchTagBox className="tag" onClick={onClick}>
      <span>{`#${tag}`}</span>
    </SearchTagBox>
  );
};

export default function SearchPage() {
  const dispatch = useDispatch();

  const [circumOptions, setCircumOptions] = useState<string[]>([]);
  const [emotionOptions, setEmotionOptions] = useState([]);
  const [peopleOptions, setPeopleOptions] = useState([]);
  const [othersOptions, setOthersOptions] = useState([]);

  const { data, isError, isLoading } = useQuery(["tagsList"], getTagsList, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });


  useEffect(() => {
    if (data) {
      setCircumOptions(data["상황"]);
      setEmotionOptions(data["감정"]);
      setPeopleOptions(data["인물"]);
      setOthersOptions(data["기타"]);
    }
  }, [data]);


  const searchTags = useSelector(selectSearchTags);
  
  const clickTag = (e:any) => {
    const taginner:string = (e.target.innerText).substr(1);
    dispatch(searchTagAdd(searchTags, taginner))
  }


  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <div className="search-page">
          <LogoPart />

          <SelectedTags  />

          <CategoriesBox>
            <Label>상황별 키워드</Label>
            <Categories>
              {circumOptions.map((item: string) => (
                <TagComponent tag={item} onClick={clickTag} />
              ))}
            </Categories>
          </CategoriesBox>

          <CategoriesBox>
            <Label>감정별 키워드</Label>
            <Categories>
              {emotionOptions.map((item: string) => (
                <TagComponent tag={item} onClick={clickTag} />
              ))}
            </Categories>
          </CategoriesBox>

          <CategoriesBox>
            <Label>인물별 키워드</Label>
            <Categories>
              {peopleOptions.map((item: string) => (
                <TagComponent tag={item} onClick={clickTag} />
              ))}
            </Categories>
          </CategoriesBox>

          <CategoriesBox>
            <Label>기타 키워드</Label>
            <Categories>
              {othersOptions.map((item: string) => (
                <TagComponent tag={item} onClick={clickTag} />
              ))}
            </Categories>
          </CategoriesBox>
        </div>
      )}
    </>
  );
}
