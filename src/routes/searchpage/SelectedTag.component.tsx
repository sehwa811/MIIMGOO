import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectTags } from "../../store/tags/TagSelector";
import { selectSearchTags } from "../../store/searchTags/SearchTagSelector";
import { searchTagAdd } from "../../store/tags/TagAction";
import { getSearchResult } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Search } from "./Search.svg";
import { ReactComponent as Close } from "./Close.svg";
import { clearSearchTag } from "../../store/searchTags/SearchTagAction";

const SelectedBox = styled.div`
  display: inline-flex;
  width: 100%;
  height: auto;
  min-height: 2.5625rem;
  padding: 0.53125rem 1.25rem 0.53125rem 0.5rem;
  align-items: center;

  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(--main-white);
  position: relative;
  top: 0.63rem;
`;

const IconBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

`;

const SelectedTagBox = styled.div`
  width: fit-content;
  height: 1.4375rem;
  display: flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  border: 0.4px solid var(--typho-black-1);
  background: var(--main-orange);

  span {
    width: fit-content;
    color: var(--main-white);
    font-family: Spoqa Han Sans Neo;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.015rem;
  }
`;

const SelectedTags = () => {
  const navigate = useNavigate();
  const searchTags = useSelector(selectSearchTags);
  const dispatch = useDispatch();

  const selectedArray = [];
  for (let i = 0; i < searchTags.length; i++) {
    selectedArray.push(
      <SelectedTagBox>
        <span>{`#${searchTags[i]}`}</span>
        <Close />
      </SelectedTagBox>
    );
  }

  const handleOnClick = () => {
    if (searchTags.length !== 0) {
      navigate("/search-result", { state: searchTags });
    dispatch(clearSearchTag());
    }
};

  return (
    <SelectedBox>
      <FlexBox>{selectedArray}</FlexBox>
      <IconBox>
        <Search onClick={handleOnClick} />
      </IconBox>
    </SelectedBox>
  );
};

export default SelectedTags;
