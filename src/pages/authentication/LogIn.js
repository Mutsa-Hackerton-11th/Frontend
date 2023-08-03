import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function LogIn() {
    return(
      <>
        <br></br>
        <h1>Log In</h1>
        <br></br>
        <p><Link to="/signup">회원가입</Link></p>
      </>
    )
}