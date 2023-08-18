import { useNavigate } from "react-router-dom";
import FormButton from "../../../button/FormButton";
import HeaderModalWrapper from "../HeaderModalWrapper";
import ModalBorder from "../ModalBorder";
import ShoppingListBox from "./ShoppingListBox";
import { useEffect, useRef } from "react";
import useGetCart from "../../../../apis/get/useGetCart";
import calculateTotalShoppingPrice from "./calculateTotalShoppingPrice";

export default function ShoppingListModal({ handleIconClick }) {
  const navigate = useNavigate();
  const { getCart, isLoading, error } = useGetCart();
  console.log(getCart);
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
      image: "/img/topImg.png",
      count: 1,
      price: "15,000원",
      productName: "sea 레터링 반팔티",
    },
    {
      image: "/img/pantsImg.png",
      count: 1,
      price: "24,500원",
      productName: "와이드 데님 바지",
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
          39,500원
          {/* {calculateTotalShoppingPrice(getCart)} */}
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
