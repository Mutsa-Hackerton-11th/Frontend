import { useEffect, useRef } from "react";
import { styled } from "styled-components";

export default function HeaderModalWrapper({ children, height, addClass }) {
  return (
    <ModalWrapper height={height} addClass={addClass}>
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
  ${(props) => props.addClass}
`;
