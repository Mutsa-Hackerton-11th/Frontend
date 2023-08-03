import { styled } from "styled-components";
import PropTypes from "prop-types";
import { inputSize } from "../../state/InputState";

export default function Input({ size = inputSize.S }) {
  return <InputWrapper size={size} />;
}

Input.propTypes = {
  size: PropTypes.string,
};

const InputWrapper = styled.input`
  ${(props) => props.theme.fontStyles.subText}
  width: ${(props) => (props.size === inputSize.S ? "30rem" : "50rem")};
  height: 7.5rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.fontColor.gray};
`;
