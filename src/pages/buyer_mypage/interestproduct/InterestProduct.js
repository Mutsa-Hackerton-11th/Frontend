import { useNavigate } from "react-router-dom/dist";
import WebBanner from "../../../components/banner/WebBanner";
import FormButton from "../../../components/button/FormButton";
import PrimaryButton from "../../../components/button/PrimaryButton";
import InterestProductList from "./InterestProductList";
import { styled } from "styled-components";
import useGetWishList from "../../../apis/get/useGetWishList";

export default function InterestProduct() {
  const {
    wishList,
    isLoading: wishListLoading,
    error: wishListError,
  } = useGetWishList();
  const navigate = useNavigate();

  const buyProductClicked = () => {
    navigate("/buyproduct");
  };

  const addCartClicked = () => {
    const ok = window.confirm("상품이 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?")
    if (ok) {
        navigate("/shoppingcart");
    }    
  };

  return (
    <InterestProductWrapper>
      <WebBanner text="관심상품" subText="마이페이지 > 관심상품" />
      <ProductWrapper>
        <h1 style={{ marginLeft: "4rem" }}>관심상품</h1>
        <div>
          <PropsWrapper>
            <Props style={{ width: "2rem" }}>
              <span>○</span>
            </Props>
            <Props style={{ width: "12rem" }}>
              <span>이미지</span>
            </Props>
            <Props style={{ width: "25rem" }}>
              <span>상품명</span>
            </Props>
            <Props style={{ width: "9rem" }}>
              <span>판매가</span>
            </Props>
            <Props style={{ width: "8rem" }}>
              <span>배송비</span>
            </Props>            
            <Props style={{ width: "20rem" }}>
              <span>선택</span>
            </Props>
          </PropsWrapper>
          {!wishListLoading ? wishList.map((product, index) => (
            <InterestProductList key={product + index} data={product} />
          )) : null}
        </div>
        <ButtonWrapper>
          <DeleteButton>
            <FormButton
              text="삭제"
              addClass={
                "width: 9rem; height: 4.5rem; border: 0.15rem solid black;"
              }
            />
            <FormButton
              text="장바구니 담기"
              addClass={
                "width: 18rem; height: 4.5rem; border: 0.15rem solid black;"
              }
              onClick={addCartClicked}
            />
          </DeleteButton>
          <PrimaryButton 
            text="전체상품주문"
            addClass={"width: 22rem"}
            onClick={buyProductClicked}
          />
        </ButtonWrapper>
      </ProductWrapper>
    </InterestProductWrapper>
  );
}

const InterestProductWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductWrapper = styled.div`
  margin: 8rem 5rem;
  h1 {
    ${(props) => props.theme.fontStyles.title}
    justify-content: flex-start;
  }
  span {
    ${(props) => props.theme.fontStyles.text}
  }
`;

const PropsWrapper = styled.div`
  width: 100%;
  height: 8rem;
  margin: 5rem 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: solid 0.15rem #e8e8e8;
`;

const Props = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 12rem;
  margin-left: 5rem;
  padding-right: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.div`
  width: 30rem;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;