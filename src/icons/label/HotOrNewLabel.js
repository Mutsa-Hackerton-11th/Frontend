import { styled } from "styled-components";
import PropTypes from "prop-types";
import { hotOrNew, labelColor } from "../../state/LabelState";

export default function HotOrNewLabel({ state }) {
  return <LabelWrapper state={state}>{state}</LabelWrapper>;
}

HotOrNewLabel.propTypes = {
  state: PropTypes.oneOf(Object.values(hotOrNew)).isRequired,
};

const LabelWrapper = styled.div`
  ${(props) => props.theme.fontStyles.text};
  font-size: 1.6rem;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 2.4rem;
  background-color: ${(props) =>
    props.state === hotOrNew.HOT ? labelColor.HOT : labelColor.NEW};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.fontColor.white};
`;
