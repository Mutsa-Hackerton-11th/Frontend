import { styled } from "styled-components";
import PropTypes from "prop-types";
import { btnSize, btnState } from "../../state/ButtonState";

export default function SecondaryButton({
  size = btnSize.S,
  state = btnState.DEFAULT,
  text,
  onClick,
}) {
  return (
    <Button state={state} size={size} onClick={onClick}>
      {text}
    </Button>
  );
}

SecondaryButton.propTypes = {
  size: PropTypes.string,
  state: PropTypes.oneOf(Object.values(btnState)),
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const Button = styled.div`
  ${(props) => props.theme.fontStyles.subText}
  background-color: ${(props) =>
    props.state === btnState.DEFAULT
      ? props.theme.colors.buttonColor.light
      : props.theme.colors.buttonColor.brown};
  color: ${(props) =>
    props.state === btnState.DEFAULT
      ? props.theme.colors.fontColor.black
      : props.theme.colors.fontColor.white};
  width: ${(props) => (props.size === btnSize.S ? "5rem" : "10rem")};
  font-weight: ${(props) => (props.size === btnSize.S ? 400 : 300)};
  height: 5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
