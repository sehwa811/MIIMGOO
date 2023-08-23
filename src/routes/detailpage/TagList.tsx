import { styled } from "styled-components";
import TagComponent from "./Tag.component";

const TagList = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const TagListComponent = ({ tags }: any) => {
  return (
    <TagList>
      {tags.map((item: any) => (
        <TagComponent key={item} tag={item} />
      ))}
    </TagList>
  );
};

export default TagListComponent;
