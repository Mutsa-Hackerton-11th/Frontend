import { styled } from "styled-components";
import PropTypes from "prop-types";
import { btnState } from "../../state/ButtonState";

export default function PrimaryButton({
  state = btnState.DEFAULT,
  text,
  onClick,
}) {
  return (
    <Button state={state} onClick={onClick}>
      {text}
    </Button>
  );
}

PrimaryButton.propTypes = {
  state: PropTypes.oneOf(Object.values(btnState)),
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const Button = styled.div`
  ${(props) => props.theme.fontStyles.text}
  background-color: ${(props) =>
    props.state === btnState.DEFAULT
      ? props.theme.colors.buttonColor.brown
      : props.theme.colors.buttonColor.light};
  color: ${(props) =>
    props.state === btnState.DEFAULT
      ? props.theme.colors.fontColor.white
      : props.theme.colors.fontColor.gray};
  width: 21.5rem;
  height: 6.4rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
