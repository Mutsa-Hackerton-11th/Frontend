import { useNavigate } from "react-router-dom/dist";
import WebBanner from "../../../components/banner/WebBanner";
import FormButton from "../../../components/button/FormButton";
import PrimaryButton from "../../../components/button/PrimaryButton";
import SelectedProductList from "./SelectedProductList";
import { styled } from "styled-components";
import withAuth from "../../../authHoc/WithAuth";
import { pageBlock } from "../../../state/pageBlockState";

function ShoppingCart() {
  const navigate = useNavigate();

  const buyProductClicked = () => {
    navigate("/buyproduct");
  };

  const listData = [
    {
      image: "/img/productImg.png",
      productName: "스트라이프 맨투맨",
      option: "블루 / M",
      count: 1,
      price: "30,000",
      delivery: "2,500",
    },
    {
      image: "/img/productImg.png",
      productName: "스트라이프 맨투맨",
      option: "블루 / M",
      count: 1,
      price: "30,000",
      delivery: "2,500",
    },
  ];

  return (
    <ShoppingCartWrapper>
      <WebBanner text="장바구니" subText="마이페이지 > 장바구니" />
      <ProductManageWrapper>
        <h1 style={{ marginLeft: "4rem" }}>상품관리</h1>
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
            <Props style={{ width: "15rem" }}>
              <span>옵션</span>
            </Props>
            <Props style={{ width: "10.5rem" }}>
              <span>수량</span>
            </Props>
            <Props style={{ width: "8.5rem" }}>
              <span>판매가</span>
            </Props>
            <Props style={{ width: "8rem" }}>
              <span>배송비</span>
            </Props>
          </PropsWrapper>
          {listData.map((listInfo, index) => (
            <SelectedProductList key={index} listInfo={listInfo} />
          ))}
          <TotalAmount>
            <span>총 결제금액 : 65,000 원</span>
          </TotalAmount>
        </div>
        <DeleteButton>
          <FormButton
            text="삭제"
            addClass={
              "width: 9rem; height: 4.5rem; border: 0.15rem solid black;"
            }
          />
          <FormButton
            text="비우기"
            addClass={
              "width: 9rem; height: 4.5rem; border: 0.15rem solid black;"
            }
          />
        </DeleteButton>
        <FinalAmount>
          <span>최종 결제 금액</span>
          <p>65,000 원</p>
        </FinalAmount>
        <OrderButton>
          <PrimaryButton
            text="전체상품주문"
            addClass={"width: 22rem"}
            onClick={buyProductClicked}
          />
          <PrimaryButton
            text="선택상품주문"
            addClass={"width: 22rem"}
            onClick={buyProductClicked}
          />
        </OrderButton>
      </ProductManageWrapper>
    </ShoppingCartWrapper>
  );
}

const ShoppingCartWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductManageWrapper = styled.div`
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

const TotalAmount = styled.div`
  width: 100%;
  height: 7rem;
  padding-right: 8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: solid 0.15rem #e8e8e8;
`;

const DeleteButton = styled.div`
  width: 24rem;
  height: 8rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FinalAmount = styled.div`
  height: 10rem;
  margin-top: 10rem;
  padding-right: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  p {
    ${(props) => props.theme.fontStyles.title}
  }
`;

const OrderButton = styled.div`
  width: 55rem;
  height: 8rem;
  margin: 4rem 0;
  padding-right: 8rem;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default withAuth(ShoppingCart, { block: pageBlock.UNAUTHENTICATED });
