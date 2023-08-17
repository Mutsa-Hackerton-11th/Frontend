import PropTypes from "prop-types";
import { styled } from "styled-components";

export default function BannerButton({ clicked = false, onClick, addClass }) {
  return (
    <ButtonWrapper clicked={clicked} addClass={addClass} onClick={onClick}>
      <SmallCircle clicked={clicked} />
    </ButtonWrapper>
  );
}

BannerButton.propTypes = {
  clicked: PropTypes.bool,
};

const ButtonWrapper = styled.div`
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 1.35rem;
  border: ${(props) =>
    props.clicked ? `1px solid ${props.theme.colors.buttonColor.brown}` : null};
  ${(props) => props.addClass}
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SmallCircle = styled.div`
  background-color: ${(props) =>
    props.clicked ? props.theme.colors.buttonColor.brown : "#D8D8D8"};
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 0.55rem;
  cursor: pointer;
`;
