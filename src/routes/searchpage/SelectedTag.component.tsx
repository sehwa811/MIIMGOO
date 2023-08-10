import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectTags } from "../../store/tags/TagSelector";
import { selectSearchTags } from "../../store/searchTags/SearchTagSelector";
import { searchTagAdd } from "../../store/tags/TagAction";
import { getSearchResult } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const SelectedBox = styled.div`
  display: inline-flex;
  width: 100%;
  height: 2.5625rem;
  padding: 0.53125rem 1.25rem 0.53125rem 0.5rem;
  align-items: flex-start;
  gap: 4.3125rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(--main-white);
`;

const SelectedTags = () => {
  const navigate = useNavigate();
  const searchTags = useSelector(selectSearchTags);
  console.log(searchTags);

  const handleOnClick = () => {
    navigate("/search-result", {state:searchTags});
  };

  return (
    <SelectedBox>
      {searchTags}
      <button onClick={handleOnClick}>검색</button>
    </SelectedBox>
  );
};

export default SelectedTags;
