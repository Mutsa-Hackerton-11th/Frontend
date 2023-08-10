import { styled } from "styled-components";

export default function ProductDetailFooterImage({ images }) {
  return (
    <ImageWrapper>
      {images.map((image, index) => {
        return <img key={index} alt={"상품 푸터 이미지"} src={image} />;
      })}
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mainBackground};
  border-radius: 1rem;
  width: 40%;
  height: 34.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 40%;
    height: 90%;
  }
`;
