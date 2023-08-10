import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import Banner from "../../components/Banner";
import BigUserIcon from "../../icons/user/BigUserIcon"
import BigCart from "../../icons/cart/BigCart"
import Orderlist from "../../icons/orderList/OrderList"
import BigInterestProduct from "../../icons/heart/BigInterestProduct"
import theme from "../../styles/theme";
import { styled } from "styled-components";

export default function BuyerMyPage() {
  const navigate = useNavigate();

  const onCartClick = () => {
    navigate("/shoppingcart");
  }
  const onOrderListClick = () => {
    navigate("/orderlist");
  }
  const onInterestProductClick = () => {
    navigate("/interestproduct");
  }

  return(
    <BuyerMyPageWrapper>
      <Banner title="마이페이지" subtitle="Home > 마이페이지" />
      <BoxWrapper>
        <MyPageBox>
          <BigUserIcon />
          <p>이름 님의 마이페이지</p>
        </MyPageBox>
        <FunctionBoxWrapper>
          <FunctionBox>
            <Function onClick={onCartClick}>
              <BigCart />
              <p>장바구니</p>
            </Function>
          </FunctionBox>
          <FunctionMiddleBox>
            <Function onClick={onOrderListClick}>
              <Orderlist />
              <p>주문내역</p>
            </Function>
          </FunctionMiddleBox>
          <FunctionBox>
            <Function onClick={onInterestProductClick}>
              <BigInterestProduct />
              <p>관심상품</p>
            </Function>
          </FunctionBox>
        </FunctionBoxWrapper>
      </BoxWrapper>
    </BuyerMyPageWrapper>
  )
}

const BuyerMyPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const BoxWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mainBackground};
  height: 56rem;
  margin: 8rem 5rem;
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    ${(props) => props.theme.fontStyles.title}
    font-weigth: 600;
  }
`

const MyPageBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.5rem white;
  p {
    margin-left: 5rem;
  }
`

const FunctionBoxWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 5rem;
  }
`

const FunctionBox = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FunctionMiddleBox = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 0.5rem white;
  border-left: solid 0.5rem white;
`

const Function = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`