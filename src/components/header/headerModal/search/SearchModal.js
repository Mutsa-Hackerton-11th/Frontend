import { useNavigate } from "react-router-dom";
import SmallInterestProduct from "../../../../icons/heart/SmallInterestProduct";
import SmallUserLoggedIcon from "../../../../icons/user/SmallUserLoggedIcon";
import HeaderModalWrapper from "../HeaderModalWrapper";
import ModalBorder from "../ModalBorder";
import SearchBar from "../../../input/SearchBar";
import { useState } from "react";

export default function UserModal({ handleIconClick }) {
  const [text, setText] = useState("");
  const textInputted = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <HeaderModalWrapper
      height="11.9rem"
      addClass="padding:3rem 0"
      handleIconClick={handleIconClick}
    >
      <ModalBorder
        addClass={
          "height:100%; display:flex; justify-content:flex-start; width:30rem;"
        }
      >
        <span>
          <SearchBar value={text} onChange={textInputted} />
        </span>
      </ModalBorder>
    </HeaderModalWrapper>
  );
}
