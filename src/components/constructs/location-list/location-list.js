import { Wrapper, ItemContainer } from "./location-list-style";

import Checkbox from "../checkbox";

const LocationList = ({ list }) => (
  <Wrapper>
    {list.map((item, index) => (
      <ItemContainer>
        <Checkbox key={index} label={item.name} />
      </ItemContainer>
    ))}
  </Wrapper>
);

export default LocationList;
