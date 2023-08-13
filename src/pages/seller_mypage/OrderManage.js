import { styled } from "styled-components";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";

function OrderManage() {
  return (
    <>
      <br></br>
      <h1>Order Management</h1>
    </>
  );
}

export default withAuth(OrderManage, { block: pageBlock.UNAUTHENTICATED });
