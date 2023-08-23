import styled from "styled-components";
import { TagBox } from "../DetailPage/Tag.component";

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
}

const TagComponent = ({ tag }: tagProps) => {
  return (
    <SearchTagBox className="tag" isfav={false}>
      <span>{`#${tag}`}</span>
    </SearchTagBox>
  );
};

const Category = (categoryName: any, options: any) => {
  return (
    <div>
      {options ? (
        <div>
          <Label>{`${categoryName}별 키워드`}</Label>
          <Categories>
            {options.map((item: string) => (
              <TagComponent tag={item} />
            ))}
          </Categories>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Category;
