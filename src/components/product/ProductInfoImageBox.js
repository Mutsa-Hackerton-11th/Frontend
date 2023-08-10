import { styled } from "styled-components";

export default function ProductInfoImageBox({ addClass, image, imageClass }) {
  return (
    <ImageBoxWrapper addClass={addClass} imageClass={imageClass}>
      <img alt={"상품 이미지"} src={image} />
    </ImageBoxWrapper>
  );
}

const ImageBoxWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  ${(props) => props.addClass}
  img {
    ${(props) => props.imageClass}
  }
`;
