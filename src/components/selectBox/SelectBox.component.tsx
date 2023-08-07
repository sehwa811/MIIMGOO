import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SelectBox, Wrapper, SelectOptions, Option } from "./SelectBox.styles";
import { ReactComponent as Expand } from "../../svg/Expand_down.svg";
import { selectTags } from "../../store/tags/TagSelector";

import { circumOptions } from "../../data/tags/options";
import { dispatchToReducer } from "../../store/tags/TagAction";

interface customSelectProps {
  optionArray: string[];
  category: string;
  categoryName: string;
  placeholder: string;
}

const CustomSelectBox = ({
  optionArray,
  category,
  categoryName,
  placeholder,
}: customSelectProps) => {
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);

  const handleOnClick = (e: any) => {
    dispatch(dispatchToReducer(e.target));
    setShowOptions((prev) => !prev);
  };

  return (
    <SelectBox>
      <Wrapper onClick={() => setShowOptions((prev) => !prev)}>
        <label>{category ? category : placeholder}</label>
        <Expand />
      </Wrapper>
      <SelectOptions show={showOptions}>
        {optionArray.map((item: string) => (
          <Option
            value={item}
            key={item}
            onClick={handleOnClick}
            id={categoryName}
          >
            {item}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default CustomSelectBox;
