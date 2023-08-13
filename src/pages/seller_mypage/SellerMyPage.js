import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom/dist";

import BigUserIcon from "../../icons/user/BigUserIcon";
import BigManageOrder from "../../icons/manageOrder/BigManageOrder";
import ManageProduct from "../../icons/manageProduct/ManageProduct";
import EnterSiteApply from "../../icons/enterSite/EnterSiteApply";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";

function SellerMyPage() {
  const navigate = useNavigate();
  const dummyData = "이은비";
  return (
    <>
      <WebBanner text="마이페이지" subText="Home > 마이페이지" />

      <NavigationWrapper>
        <NavigationHeader onClick={() => navigate("/sellerinfor")}>
          <BigUserIcon />
          {dummyData}님의 마이페이지
        </NavigationHeader>

        <NavigationFooter>
          <NavigationBox onClick={() => navigate("/storeentry")}>
            <EnterSiteApply styled={{ width: "5px" }} />
            <p>입점신청</p>
          </NavigationBox>
          <NavigationBox_center onClick={() => navigate("/productmanage")}>
            <ManageProduct />
            <p>상품관리</p>
          </NavigationBox_center>
          <NavigationBox onClick={() => navigate("/ordermanage")}>
            <BigManageOrder />
            <p>주문관리</p>
          </NavigationBox>
        </NavigationFooter>
      </NavigationWrapper>
    </>
  );
}

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 80%;
  height: 50rem;

  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;

  background-color: ${(props) => props.theme.colors.mainBackground};
  border-radius: 5rem;
`;

const NavigationFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 40%;

  justify-content: space-evenly;
`;

const NavigationHeader = styled.button`
  border-bottom: 0.5rem solid #ffffff;
  width: 80%;
  height: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10%;

  ${(props) => props.theme.fontStyles.subTitle}

  padding-bottom:1rem;
`;

const NavigationBox = styled.button`
  p {
    ${(props) => props.theme.fontStyles.subTitle}
  }

  padding-top: 5%;
  padding-bottom: 10%;
`;

const NavigationBox_center = styled.button`
  padding-top: 5%;
  padding-bottom: 10%;
  padding-left: 5%;
  padding-right: 5%;

  border-left: 0.5rem solid #ffffff;
  border-right: 0.5rem solid #ffffff;

  p {
    ${(props) => props.theme.fontStyles.subTitle}
  }
`;

export default withAuth(SellerMyPage, { block: pageBlock.UNAUTHENTICATED });
