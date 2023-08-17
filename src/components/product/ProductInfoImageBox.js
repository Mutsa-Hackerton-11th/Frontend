import { styled } from "styled-components";

export default function ProductInfoImageBox({
  addClass,
  image,
  imageClass,
  onClick,
}) {
  return (
    <ImageBoxWrapper
      addClass={addClass}
      imageClass={imageClass}
      onClick={onClick}
    >
      <img
        alt={"상품 이미지"}
        src={
          image ? image : process.env.PUBLIC_URL + "/img/preparing-image.png"
        }
      />
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
