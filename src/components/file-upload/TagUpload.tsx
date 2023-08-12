import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postTagsList } from "../../utils/axios";

export interface ITag {
  type: string;
  name: string;
}

const TagRegistration: React.FC = () => {
  const tagUpload = useMutation(postTagsList, {
    onSuccess: () => {
      alert("Tags uploaded successfully!");
      setTagsList([]);
    },
  });
  const [tag, setTag] = useState<ITag>({ type: "상황", name: "" });
  const [tagsList, setTagsList] = useState<ITag[]>([]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTag((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTag = () => {
    setTagsList((prev) => [...prev, tag]);
    setTag((prev) => ({ type: prev.type, name: "" })); // name만 초기화
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  const handleTagSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (tagsList.length > 0) {
      console.log(tagsList);
      tagUpload.mutate(tagsList);
    } else {
      alert("No tags");
    }
  };

  return (
    <div>
      <br></br>
      <h3>ADD NEW TAGS</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type: </label>
          <select name="type" value={tag.type} onChange={handleInputChange}>
            <option value="상황">상황</option>
            <option value="감정">감정</option>
            <option value="인물">인물</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={tag.name}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddTag}>
          Add Tag
        </button>
      </form>
      <form onSubmit={handleTagSubmit}>
        <div>
          <label>추가 태그 리스트</label>
          <ul>
            {tagsList.map((t, index) => (
              <li key={index}>
                {t.type} : {t.name}
              </li>
            ))}
          </ul>
        </div>
        <button type="submit">Upload Tags</button>
      </form>
    </div>
  );
};

export default TagRegistration;
