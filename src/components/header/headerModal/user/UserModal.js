import { useNavigate } from "react-router-dom";
import SmallInterestProduct from "../../../../icons/heart/SmallInterestProduct";
import SmallUserLoggedIcon from "../../../../icons/user/SmallUserLoggedIcon";
import HeaderModalWrapper from "../HeaderModalWrapper";
import ModalBorder from "../ModalBorder";

export default function UserModal({ handleIconClick }) {
  const navigate = useNavigate();
  const myPageClicked = async () => {
    await navigate("/buyermypage");
    handleIconClick(-1);
  };
  const interestProductClicked = async () => {
    await navigate("/interestproduct");
    handleIconClick(-1);
  };
  return (
    <HeaderModalWrapper
      height="17.7rem"
      addClass="padding:3rem 0"
      handleIconClick={handleIconClick}
    >
      <ModalBorder
        onClick={myPageClicked}
        addClass={
          "height:50%; display:flex; justify-content:flex-start; width:30rem;"
        }
      >
        <span
          style={{
            marginRight: "2rem",
          }}
        >
          <SmallUserLoggedIcon />
        </span>
        <span>마이 페이지</span>
      </ModalBorder>
      <ModalBorder
        onClick={interestProductClicked}
        addClass={
          "height:50%; display:flex; justify-content:flex-start; width:30rem;"
        }
      >
        <span
          style={{
            marginRight: "2rem",
          }}
        >
          <SmallInterestProduct />
        </span>
        <span>관심 상품</span>
      </ModalBorder>
    </HeaderModalWrapper>
  );
}
