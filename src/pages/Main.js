import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Main() {
    return(
      <>
        <br></br>
        <h1>Main</h1>
        <br></br>
        <p><Link to="/login">로그인</Link></p>
        <p><Link to="/buyermypage">구매자 마이페이지</Link></p>
        <p><Link to="/sellermypage">판매자 마이페이지</Link></p>
      </>
    )
}