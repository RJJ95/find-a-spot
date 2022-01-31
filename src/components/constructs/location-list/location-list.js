import {
  Wrapper,
  ListTitle,
  ListItem,
  ItemContainer,
} from "./location-list-style";

const LocationList = ({ listTitle, list }) => (
  <Wrapper>
    <ListTitle>{listTitle}</ListTitle>
    {list.map((item, index) => (
      <ItemContainer>
        <ListItem key={index}>{item.name}</ListItem>
      </ItemContainer>
    ))}
  </Wrapper>
);

export default LocationList;
