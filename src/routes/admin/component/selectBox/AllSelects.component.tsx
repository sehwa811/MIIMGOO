import { useSelector } from "react-redux";

import CustomSelectBox from "./SelectBox.component";
import { selectTags } from "../../../../store/tags/TagSelector";

import {
  circumOptions,
  emotionOptions,
  peopleOptions,
  othersOptions,
} from "../../../../data/tags/options";

const AllSelects = () => {
  const { circum, people, emotions, others } = useSelector(selectTags);
  return (
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
  );
};

export default AllSelects;
