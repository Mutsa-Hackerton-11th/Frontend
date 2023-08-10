import WebBanner from "../../../components/banner/WebBanner";
import { styled } from "styled-components";
import OrderedProductList from "./OrderedProductList";

export default function OrderList() {
  const listData = [
    {
      orderNumber: "20230803-38493",
      image: "/img/productImg.png",
      productName: "스트라이프 맨투맨",
      option: "블루 / M",
      count: 1,
      price: "30,000",
      state: "배송중",
    },
    {
      orderNumber: "20230603-35653",
      image: "/img/productImg.png",
      productName: "스트라이프 맨투맨",
      option: "블루 / M",
      count: 1,
      price: "30,000",
      state: "배송완료",
    },
  ];

  return(
    <OrderListWrapper>
      <WebBanner text="주문내역" subText="마이페이지 > 주문내역" />
      <OrderHistoryWrapper>
        <h1 style={{ marginLeft: "4rem" }}>주문내역</h1>
        <div>
          <PropsWrapper>
            <Props style={{ width: "25rem" }}>
              <span>주문번호</span>
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
            <Props style={{ width: "8rem" }}>
              <span>수량</span>
            </Props>
            <Props style={{ width: "12rem" }}>
              <span>구매금액</span>
            </Props>
            <Props style={{ width: "12rem" }}>
              <span>주문상태</span>
            </Props>
          </PropsWrapper>
          {listData.map((listInfo) => (
            <OrderedProductList listInfo={listInfo} />
          ))}
        </div>
      </OrderHistoryWrapper>
    </OrderListWrapper>
  )
}

const OrderListWrapper = styled.div`
  width: 100%;
  height: 100%; 
`;

const OrderHistoryWrapper = styled.div`
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

