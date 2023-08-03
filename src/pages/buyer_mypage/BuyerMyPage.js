import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function BuyerMyPage() {
    return(
      <>
        <br></br>
        <h1>Buyer MyPage</h1>
        <br></br>
        <p><Link to="/buyerinfor">회원정보</Link></p>
        <p><Link to="/shoppingcart">장바구니</Link></p>
        <p><Link to="/orderlist">주문내역</Link></p>
        <p><Link to="/interestproduct">관심상품</Link></p>
      </>
    )
}