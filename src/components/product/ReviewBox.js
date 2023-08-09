import { styled } from "styled-components";
import BigUserIcon from "../../icons/user/BigUserIcon";
import SecondaryButton from "../button/SecondaryButton";
import { btnState } from "../../state/ButtonState";
import ChooseColorButton from "../button/ChooseColorButton";
import FullStar from "../../icons/star/FullStar";
import HalfStar from "../../icons/star/HalfStar";

export default function ReviewBox({ reviewText, size, color, images }) {
  return (
    <ReviewBoxWrapper>
      <PurchaseInfo>
        <div
          style={{
            marginRight: "3rem",
          }}
        >
          <BigUserIcon />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <UserId>Brian</UserId>
          <UserPick>
            <span>
              <SecondaryButton text={size} state={btnState.PRESSED} />
            </span>
            <span>
              <ChooseColorButton color={color} />
            </span>
            <span>
              <FullStar />
              <FullStar />
              <FullStar />
              <HalfStar />
            </span>
          </UserPick>
        </div>
      </PurchaseInfo>
      <ReviewText>
        <p>{reviewText}</p>
      </ReviewText>
      <ReviewPhoto>
        {images
          ? images.map((image, index) => {
              return <img alt="리뷰 사진" src={image} />;
            })
          : null}
      </ReviewPhoto>
    </ReviewBoxWrapper>
  );
}

const ReviewBoxWrapper = styled.div`
  width: 100%;
  padding: 3rem 5rem;
  border-bottom: 1px solid #e8e8e8;
`;

const PurchaseInfo = styled.div`
  display: flex;
`;

const UserId = styled.div`
  ${(props) => props.theme.fontStyles.text}
  margin-left: 2rem;
`;

const UserPick = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 2rem;
  }
`;

const ReviewText = styled.div`
  padding: 3rem 0;
  p {
    ${(props) => props.theme.fontStyles.subText}
  }
`;

const ReviewPhoto = styled.div`
  padding: 3rem 0;
  img:first-child {
    margin-right: 2rem;
  }
  img {
    width: 16.2rem;
    height: 16.2rem;
  }
`;
