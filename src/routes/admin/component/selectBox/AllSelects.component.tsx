import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import CustomSelectBox from "./SelectBox.component";
import { selectCircum, selectEmotion, selectOthers, selectPeople, selectTags } from "../../../../store/tags/TagSelector";

import { FormEvent, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTagsList } from "../../../../utils/axios";
import { SelectBox } from "./SelectBox.styles";
import { dispatchCircum, dispatchEmotion, dispatchOthers, dispatchPeople } from "../../../../store/tags/TagAction";

const AllSelects = () => {
  const [circumOptions, setCircumOptions] = useState([]);
  const [emotionOptions, setEmotionOptions] = useState([]);
  const [peopleOptions, setPeopleOptions] = useState([]);
  const [othersOptions, setOthersOptions] = useState([]);

  const dispatch = useDispatch();


  const { data, isError, isLoading } = useQuery(["tagsList"], getTagsList);

  useEffect(() => {
    if (data) {
      setCircumOptions(data["상황"]);
      setEmotionOptions(data["감정"]);
      setPeopleOptions(data["인물"]);
      setOthersOptions(data["기타"]);
      console.log(circumOptions);
    }
  }, [data]);
  
  
  const circum = useSelector(selectCircum);
  const emotion = useSelector(selectEmotion);
  const people = useSelector(selectPeople);
  const others = useSelector(selectOthers);


  const handleOnClick = (e:any) => {
    switch (e.target.id) { 
      case "circum":
        return dispatch(dispatchCircum(circum, e.target.innerText));
      case "emotion":
        return dispatch(dispatchEmotion(emotion, e.target.innerText));
      case "people":
        return dispatch(dispatchPeople(people, e.target.innerText));
      case "others":
        return dispatch(dispatchOthers(others, e.target.innerText));
      }
  }

  return (
    <>
      {isLoading ? (
        <div />
      ) : (
        <>
          <select multiple style={{ width: "80px" }}>
            {circumOptions.map((item: string) => (
              <option id="circum" onClick={handleOnClick}>{item}</option>
            ))}
          </select>
          <select multiple style={{ width: "80px" }}>
            {emotionOptions.map((item: string) => (
              <option id="emotion" onClick={handleOnClick}>{item}</option>
            ))}
          </select>
          <select multiple style={{ width: "80px" }}>
            {peopleOptions.map((item: string) => (
              <option id="people" onClick={handleOnClick}>{item}</option>
            ))}
          </select>
          <select multiple style={{ width: "80px" }}>
            {othersOptions.map((item: string) => (
              <option id="others" onClick={handleOnClick}>{item}</option>
            ))}
          </select>
       
        </>
      )}
    </>
  );
};

export default AllSelects;
