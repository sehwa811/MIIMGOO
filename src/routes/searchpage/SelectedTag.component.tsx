import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectTags } from "../../store/tags/TagSelector";
import { selectSearchTags } from "../../store/searchTags/SearchTagSelector";
import { searchTagAdd } from "../../store/tags/TagAction";
import { getSearchResult } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { ReactComponent as Search } from "./Search.svg";
import { clearSearchTag } from "../../store/searchTags/SearchTagAction";

const SelectedBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  height: 2.5625rem;
  padding: 0.53125rem 1.25rem 0.53125rem 0.5rem;
  align-items: center;
  gap: 4.3125rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(--main-white);
  position: relative;
  top: 0.63rem;
`;

const SelectedTags = () => {
  const navigate = useNavigate();
  const searchTags = useSelector(selectSearchTags);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    navigate("/search-result", { state: searchTags });
    dispatch(clearSearchTag());
  };

  return (
    <SelectedBox>
      <div>{searchTags}</div>
      <Search onClick={handleOnClick} />
    </SelectedBox>
  );
};

export default SelectedTags;
