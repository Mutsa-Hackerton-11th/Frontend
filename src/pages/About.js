import { styled } from "styled-components";
import { Default, Desktop, Mobile, Tablet } from "../assets/mediaQuery";

const MainPage = styled.div`
  background-color: ${(props) => props.theme.colors.mainBackground};
  color: ${(props) => props.theme.colors.mainFont};
  p {
    font-size: ${(props) => props.theme.fontSize.mainSize};
  }
`;

export default function About() {
  return (
    <MainPage>
      <Desktop>
        <p>Desktop or laptop</p>
      </Desktop>
      <Tablet>
        <p>Tablet</p>
      </Tablet>
      <Mobile>
        <p>Mobile</p>
      </Mobile>
      <Default>
        <p>Not mobile (desktop or laptop or tablet)</p>
      </Default>
    </MainPage>
  );
}
