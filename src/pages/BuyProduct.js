import { styled } from "styled-components";
import WebBanner from "../components/banner/WebBanner";
import CategoryWrapper from "../components/buyproduct/CategoryWrapper";
import SelectButton from "../components/button/SelectButton";
import ProductInfoFrame from "../components/buyproduct/ProductInfoFrame";
import { useState } from "react";
import { btnState } from "../state/ButtonState";
import FormButton from "../components/button/FormButton";
import BuyProductForm from "../components/buyproduct/BuyProductForm";
import MediaQuery from "../assets/mediaQuery";
import PrimaryButton from "../components/button/PrimaryButton";
import withAuth from "../authHoc/WithAuth";
import { pageBlock } from "../state/pageBlockState";

function BuyProduct() {
  const [selectClicked, setSelectClicked] = useState(false);
  const selectBtnClicked = () => {
    setSelectClicked((prev) => !prev);
  };
  const deleteBtnClicked = () => {
    console.log("deleted");
  };
  const { isBigMobile, isSmallMobile } = MediaQuery();
  return (
    <>
      <WebBanner text="구매하기" />
      <CategoryWrapper text="상품정보">
        <ProductInfoFrame
          details={[
            {
              category: <SelectButton />,
              detail: (
                <SelectButton
                  state={selectClicked ? btnState.PRESSED : btnState.DEFAULT}
                />
              ),
            },
            {
              category: "이미지",
              detail:
              "/img/topImg.png",
            },
            { category: "상품명", detail: "sea 레터링 맨투맨" },
            { category: "옵션", detail: "화이트 / F" },
            { category: "수량", detail: 1 },
            { category: "판매가", detail: "15,000" },
            { category: "배송비", detail: "2,500" },
          ]}
          hasSelectBtn={true}
          onClick={selectBtnClicked}
        />
      </CategoryWrapper>
      <TotalPrice>
        <span>총 결제금액: 17,500 원</span>
      </TotalPrice>
      <div
        style={{
          padding: "2rem",
        }}
      >
        <FormButton
          text="삭제"
          onClick={deleteBtnClicked}
          addClass="width:7.4rem; height:4rem;"
        />
      </div>
      <CategoryWrapper text="주문정보">
        <BuyProductForm
          formDetail={[
            { text: "이름" },
            { text: "주소", address: true },
            { size: "big" },
            { size: "big" },
            { text: "휴대전화" },
            { text: "이메일" },
          ]}
        />
      </CategoryWrapper>
      <CategoryWrapper text="배송정보">
        <BuyProductForm
          formDetail={[
            { text: "이름" },
            { text: "주소", address: true },
            { size: "big" },
            { size: "big" },
            { text: "휴대전화" },
            { text: "배송 메시지" },
          ]}
        />
      </CategoryWrapper>
      <CategoryWrapper text="결제정보">
        <div
          style={{
            display: "flex",
            padding: "5rem 0",
          }}
        >
          <PurchaseText>
            <span>결제수단</span>
          </PurchaseText>
          <PurchaseMethod
            isSmallMobile={isSmallMobile}
            isBigMobile={isBigMobile}
          >
            <div>
              <span>
                <SelectButton />
              </span>
              <span>무통장 입금</span>
            </div>
            <div>
              <span>
                <SelectButton />
              </span>
              <span>실시간 계좌이체</span>
            </div>
            <div>
              <span>
                <SelectButton />
              </span>
              <span>카드 결제</span>
            </div>
            <div>
              <span>
                <SelectButton />
              </span>
              <span>휴대폰 결제</span>
            </div>
            <div>
              <span>
                <SelectButton />
              </span>
              <span>카카오페이</span>
            </div>
            <div>
              <span>
                <SelectButton />
              </span>
              <span>네이버페이</span>
            </div>
          </PurchaseMethod>
          <FinalPrice>
            <div>
              <span>최종 결제 금액</span>
            </div>
            <div
              style={{
                padding: "3rem 0",
              }}
            >
              <span>39,300원</span>
            </div>
            <div
              style={{
                width: "20.5rem",
              }}
            >
              {<PrimaryButton text="결제하기" />}
            </div>
          </FinalPrice>
        </div>
      </CategoryWrapper>
    </>
  );
}

const TotalPrice = styled.div`
  padding: 2rem 8rem;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #e8e8e8;
  span {
    ${(props) => props.theme.fontStyles.text}
  }
`;

const PurchaseText = styled.div`
  span {
    ${(props) => props.theme.fontStyles.text}
  }
  padding-right: 2rem;
  border-right: 1px solid #e8e8e8;
`;

const PurchaseMethod = styled.div`
  padding: 0 4rem;
  display: ${(props) => (props.isSmallMobile ? null : "grid")};
  grid-template-columns: ${(props) =>
    props.isSmallMobile ? null : "repeat(2, 1fr)"};
  border-right: 1px solid #e8e8e8;
  > div {
    margin-bottom: 3rem;
    display: flex;
    span {
      ${(props) => props.theme.fontStyles.text}
    }
    span:first-child {
      margin-right: 1rem;
    }
  }
`;

const FinalPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 2rem;
  margin-left: 1px solid #e8e8e8;
  span {
    ${(props) => props.theme.fontStyles.text}
  }
  div:nth-child(2) {
    span {
      ${(props) => props.theme.fontStyles.subTitle}
    }
  }
`;

export default withAuth(BuyProduct, { block: pageBlock.UNAUTHENTICATED });
