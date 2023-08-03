import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function About() {
    return(
      <>
        <br></br>
        <h1>About</h1>
        <br></br>
        <p><Link to="/serviceinfor">서비스 소개</Link></p>
        <p><Link to="/entryinfor">입점 절차</Link></p>
        <p><Link to="/feeinfor">수수료 등급</Link></p>
      </>
    )
}
