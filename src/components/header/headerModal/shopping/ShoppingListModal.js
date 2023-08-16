import { useNavigate } from "react-router-dom";
import FormButton from "../../../button/FormButton";
import HeaderModalWrapper from "../HeaderModalWrapper";
import ModalBorder from "../ModalBorder";
import ShoppingListBox from "./ShoppingListBox";
import { useEffect, useRef } from "react";

export default function ShoppingListModal({ handleIconClick }) {
  const navigate = useNavigate();
  const goToCartClicked = async () => {
    await navigate("/shoppingcart");
    handleIconClick(-1);
  };
  const buyProductsClicked = async () => {
    await navigate("/buyproduct");
    handleIconClick(-1);
  };
  const listData = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg",
      count: 1,
      price: "30,000원",
      productName: "스트라이프 맨투맨",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg",
      count: 1,
      price: "30,000원",
      productName: "스트라이프 맨투맨",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg",
      count: 1,
      price: "30,000원",
      productName: "스트라이프 맨투맨",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg",
      count: 1,
      price: "30,000원",
      productName: "스트라이프 맨투맨",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg",
      count: 1,
      price: "30,000원",
      productName: "스트라이프 맨투맨",
    },
  ];
  return (
    <HeaderModalWrapper height="74.6rem" handleIconClick={handleIconClick}>
      <ModalBorder
        addClass={"height:10%; display:flex; justify-content:center;"}
      >
        <span>Shopping Cart</span>
      </ModalBorder>
      <div
        style={{
          height: "70%",
          padding: "2rem 0",
          overflowY: "scroll",
        }}
      >
        {listData.map((listInfo) => (
          <ShoppingListBox listInfo={listInfo} />
        ))}
      </div>
      <ModalBorder
        addClass={"height:10%; display:flex; justify-content:space-between;"}
      >
        <span>최종 결제 금액</span>
        <span
          style={{
            color: "#B88E2F",
          }}
        >
          120000원
        </span>
      </ModalBorder>
      <div
        style={{
          width: "36.6rem",
          height: "10%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <FormButton
          onClick={goToCartClicked}
          addClass={"width:13.7rem; height:4rem; font-size:2rem;"}
          text="장바구니"
        />
        <FormButton
          onClick={buyProductsClicked}
          addClass={
            "width:13.7rem; height:4rem; margin-left:1.5rem; font-size:2rem;"
          }
          text="결제하기"
        />
      </div>
    </HeaderModalWrapper>
  );
}
