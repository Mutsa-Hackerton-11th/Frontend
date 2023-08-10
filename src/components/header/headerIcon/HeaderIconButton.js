import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function HeaderIconButton({
  children,
  handleIconClick,
  nowIconState,
  iconState,
  index,
}) {
  const headerIconClicked = () => {
    handleIconClick(index);
  };

  return (
    <HeaderIconWrapper
      onClick={headerIconClicked}
      clicked={nowIconState === iconState.id}
    >
      {children}
      {nowIconState === iconState.id && iconState.modal ? (
        <iconState.modal handleIconClick={handleIconClick} />
      ) : null}
    </HeaderIconWrapper>
  );
}

HeaderIconButton.propTypes = {
  children: PropTypes.node,
  handleIconClick: PropTypes.func,
  nowIconState: PropTypes.number,
  iconState: PropTypes.array,
  index: PropTypes.number,
};

const HeaderIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.clicked ? props.theme.colors.buttonColor.brown : null};
  color: ${(props) =>
    props.clicked ? props.theme.colors.fontColor.white : null};
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
`;
