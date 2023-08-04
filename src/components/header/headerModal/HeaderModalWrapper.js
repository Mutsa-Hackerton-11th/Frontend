import { styled } from "styled-components";

export default function HeaderModalWrapper({ children }) {
  return <ModalWrapper>{children}</ModalWrapper>;
}

const ModalWrapper = styled.div`
  border: 1px solid #b88e2f;
  border-radius: 1rem;
  width: 41.7rem;
  height: 74.6rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 6rem;
  right: 2rem;
`;
