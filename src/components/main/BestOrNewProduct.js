import { styled } from "styled-components";
import MediaQuery from "../../assets/mediaQuery";

export default function BestOrNewProduct({ data }) {
  const { isMobile } = MediaQuery();
  return (
    <ProductWrapper
      style={{
        width: isMobile ? "50%" : null,
      }}
    >
      <img alt={"제품 이미지"} src={data.image} />
      <div>
        <span
          style={{
            marginBottom: "1rem",
          }}
        >
          {data.name}
        </span>
        <span>{data.price}</span>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  width: 33.3%;
  height: 60rem;
  padding: 3rem 1rem;
  img {
    width: 100%;
    height: 80%;
  }
  div {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      ${(props) => props.theme.fontStyles.text}
    }
  }
`;
