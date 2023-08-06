import { styled } from "styled-components";

export default function ModalBorder({ children, addClass, onClick }) {
  return (
    <ModalBorderWrapper addClass={addClass} onClick={onClick}>
      {children}
    </ModalBorderWrapper>
  );
}

const ModalBorderWrapper = styled.div`
  width: 36.6rem;
  span {
    ${(props) => props.theme.fontStyles.text};
    color: #000;
  }
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  ${(props) => props.addClass}
`;
