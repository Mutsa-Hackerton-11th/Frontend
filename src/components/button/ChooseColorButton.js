import { styled } from "styled-components";
import PropTypes from "prop-types";
import { btnState } from "../../state/ButtonState";

export default function ChooseColorButton({
  state = btnState.DEFAULT,
  color,
  onClick,
}) {
  return <Button state={state} color={color} onClick={onClick} />;
}

ChooseColorButton.propTypes = {
  state: PropTypes.oneOf(Object.values(btnState)),
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const Button = styled.div`
  background-color: ${(props) => props.color};
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: ${(props) =>
    props.state === btnState.DEFAULT ? "none" : "0.3rem solid black"};
  cursor: pointer;
`;
