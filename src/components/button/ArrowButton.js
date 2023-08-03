import { styled } from "styled-components";
import PropTypes from "prop-types";
import RightArrow from "../icon/arrow/SmallRightArrow";

export default function ArrowButton({ onClick, color }) {
  return (
    <Button onClick={onClick}>
      <RightArrow
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
  clir: PropTypes.string,
};

const Button = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
