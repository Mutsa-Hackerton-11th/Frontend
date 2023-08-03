import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function ProductManage() {
    return(
      <>
        <br></br>
        <h1>Product Management</h1>
        <br></br>
        <p><Link to="/productupload">상품등록</Link></p>
      </>
    )
}