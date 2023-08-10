import { styled } from "styled-components";

export default function CategoryWrapper({ text, children }) {
  return (
    <BoxWrapper>
      <BoxCategoryText>{text}</BoxCategoryText>
      {children}
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  padding: 15rem 5rem;
  padding-bottom: 0rem;
`;

const BoxCategoryText = styled.div`
  ${(props) => props.theme.fontStyles.subTitle};
`;
