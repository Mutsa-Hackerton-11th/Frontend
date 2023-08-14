import { styled } from "styled-components";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";

function SellerInfor() {
  return (
    <>
      <br></br>
      <h1>Seller Information</h1>
    </>
  );
}

export default withAuth(SellerInfor, { block: pageBlock.UNAUTHENTICATED });
