import { styled } from "styled-components";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";

function SignUp() {
  return (
    <>
      <br></br>
      <h1>Sign up</h1>
    </>
  );
}

export default withAuth(SignUp, { block: pageBlock.ACTIVATED });
