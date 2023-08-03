import PropTypes from "prop-types";
import { styled } from "styled-components";
import SearchIcon from "../icon/SearchIcon";

export default function SelectBar() {
  return (
    <form>
      <SelectWrapper name="order">
        <option value="americano">아메리카노</option>
        <option value="caffe latte">카페라테</option>
        <option value="cafe au lait">카페오레</option>
        <option value="espresso">에스프레소</option>
      </SelectWrapper>
    </form>
  );
}

const SelectWrapper = styled.select`
  width: 50rem;
  height: 7.5rem;
  border-radius: 1rem;
`;
