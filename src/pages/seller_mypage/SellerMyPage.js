import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function SellerMyPage() {
    return(
      <>
        <br></br>
        <h1>Seller MyPage</h1>
        <br></br>
        <p><Link to="/sellerinfor">회원정보</Link></p>
        <p><Link to="/storeentry">입점신청</Link></p>
        <p><Link to="/productmanage">상품관리</Link></p>
        <p><Link to="/ordermanage">주문관리</Link></p>
      </>
    )
}