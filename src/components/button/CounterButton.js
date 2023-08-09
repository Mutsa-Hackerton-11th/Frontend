import PropTypes from "prop-types";
import { styled } from "styled-components";

export default function CounterButton({ increaseNum, decreaseNum, num }) {
  return (
    <CounterWrapper>
      <div onClick={increaseNum}>+</div>
      <div>{num}</div>
      <div onClick={decreaseNum}>-</div>
    </CounterWrapper>
  );
}

CounterButton.propTypes = {
  increaseNum: PropTypes.func.isRequired,
  decreaseNum: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
};

const CounterWrapper = styled.div`
  height: 7.5rem;
  background-color: ${(props) => props.theme.colors.buttonColor.gray};
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  div {
    ${(props) => [props.theme.fontStyles.text]}
    font-size:1.6rem;
    cursor: pointer;
  }
`;
