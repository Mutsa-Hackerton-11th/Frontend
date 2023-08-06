import { styled } from "styled-components";
import { btnState } from "../../state/ButtonState";
import PropTypes from "prop-types";

export default function FormButton({
  state = btnState.DEFAULT,
  text,
  addClass,
  onClick,
}) {
  return (
    <Button addClass={addClass} onClick={onClick}>
      {text}
    </Button>
  );
}

FormButton.propTypes = {
  state: PropTypes.oneOf(Object.values(btnState)),
  text: PropTypes.string,
};

const Button = styled.div`
  ${(props) => props.theme.fontStyles.text};
  color: #000;
  border: 0.1rem solid black;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.addClass}
`;
