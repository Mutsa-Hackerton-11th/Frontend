import { styled } from "styled-components";

const Header = styled.div`
  background-color: ${(props) => props.theme.colors.mainBackground};
  color: ${(props) => props.theme.colors.mainFont};
  p {
    font-size: ${(props) => props.theme.fontSize.mainSize};
  }
`;

export default function Pick() {
    return(
        <Header>Pick</Header>
    )
}