import { styled } from "styled-components";
import { btnState } from "../../state/ButtonState";
import PropTypes from "prop-types";

export default function FormButton({ state = btnState.DEFAULT, text }) {
  return <Button state={state}>{text}</Button>;
}

FormButton.propTypes = {
  state: PropTypes.oneOf(Object.values(btnState)),
  text: PropTypes.string,
};

const Button = styled.div`
  ${(props) => props.theme.fontStyles.text}
  width: 14rem;
  height: 7.5rem;
  border: 0.1rem solid black;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.buttonColor.gray};
  color: ${(props) =>
    props.state === btnState.DEFAULT
      ? null
      : props.theme.colors.fontColor.gray};
  font-weight: 400;
`;
