import PropTypes from "prop-types";

export default function SmallRightArrow({ color = "#000" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.8rem"
      height="1.4rem"
      fill="none"
      viewBox="0 0 8 14"
    >
      <path fill={color} d="m0 12 5-5-5-5 1-2 7 7-7 7-1-2Z" />
    </svg>
  );
}

SmallRightArrow.propTypes = {
  color: PropTypes.string,
};
