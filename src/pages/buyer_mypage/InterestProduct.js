import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";

function InterestProduct() {
  return (
    <>
      <br></br>
      <h1>Interest Product</h1>
    </>
  );
}

export default withAuth(InterestProduct, { block: pageBlock.UNAUTHENTICATED });
