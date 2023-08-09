import { useSelector } from "react-redux";

import CustomSelectBox from "./SelectBox.component";
import { selectTags } from "../../../../store/tags/TagSelector";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTagsList } from "../../../../utils/axios";

const AllSelects = () => {
  const [circumOptions, setCircumOptions] = useState([]);
  const [emotionOptions, setEmotionOptions] = useState([]);
  const [peopleOptions, setPeopleOptions] = useState([]);
  const [othersOptions, setOthersOptions] = useState([]);

  const { data, isError, isLoading } = useQuery(["tagsList"], getTagsList);

  useEffect(() => {
    if (data) {
      setCircumOptions(data["상황"]);
      setEmotionOptions(data["감정"]);
      setPeopleOptions(data["인물"]);
      setOthersOptions(data["기타"]);
    }
  }, [data]);
  const { circum, people, emotions, others } = useSelector(selectTags);
  return (
    <>
      {isLoading ? (
        <div>1</div>
      ) : (
        <>
          <CustomSelectBox
            optionArray={circumOptions}
            category={circum}
            categoryName="circum"
            placeholder="상황별"
          />
          <CustomSelectBox
            optionArray={emotionOptions}
            category={emotions}
            categoryName="emotions"
            placeholder="감정별"
          />
          <CustomSelectBox
            optionArray={peopleOptions}
            category={people}
            categoryName="people"
            placeholder="인물별"
          />
          <CustomSelectBox
            optionArray={othersOptions}
            category={others}
            categoryName="others"
            placeholder="기타"
          />
        </>
      )}
    </>
  );
};

export default AllSelects;
