import PropTypes from "prop-types";

export default function RightArrow({ color = "#000" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none">
      <path fill={color} d="m0 12 5-5-5-5 1-2 7 7-7 7-1-2Z" />
    </svg>
  );
}

RightArrow.propTypes = {
  color: PropTypes.string,
};
