import { styled } from "styled-components";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";

function StoreEntry() {
  return (
    <>
      <br></br>
      <h1>Store Entry</h1>
    </>
  );
}

export default withAuth(StoreEntry, { block: pageBlock.UNAUTHENTICATED });
