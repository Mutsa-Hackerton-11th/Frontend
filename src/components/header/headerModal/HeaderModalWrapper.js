import { useEffect, useRef } from "react";
import { styled } from "styled-components";

export default function HeaderModalWrapper({
  children,
  height,
  handleIconClick,
  addClass,
}) {
  const modalRef = useRef(null);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleIconClick(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <ModalWrapper height={height} addClass={addClass} ref={modalRef}>
      {children}
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  border: 1px solid #b88e2f;
  border-radius: 1rem;
  width: 41.7rem;
  height: ${(props) => props.height};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 6rem;
  right: 2rem;
  z-index: 1;
  background-color: white;
  ${(props) => props.addClass};
`;
