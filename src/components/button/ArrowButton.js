import { styled } from "styled-components";
import PropTypes from "prop-types";
import SmallRightArrow from "../../icons/arrow/SmallRightArrow";

export default function ArrowButton({ onClick, color, bgColor }) {
  return (
    <Button onClick={onClick} bgColor={bgColor}>
      <SmallRightArrow
        color={color}
        style={{
          width: "50px",
          height: "50px",
        }}
      />
    </Button>
  );
}

ArrowButton.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
};

const Button = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
