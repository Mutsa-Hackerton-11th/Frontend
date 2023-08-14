import { useState } from "react";
import FormButton from "../../../components/button/FormButton";
import theme from "../../../styles/theme";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import withAuth from "../../../authHoc/WithAuth";
import { pageBlock } from "../../../state/pageBlockState";

export default function SelectedProductList({ listInfo }) {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ListWrapper>
      <CustomCheckboxLabel>
        <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
        <Checkmark className={isChecked ? "checked" : ""} />
      </CustomCheckboxLabel>
      <ProductImg src={listInfo.image} />
      <span
        style={{
          width: "25rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listInfo.productName}
      </span>
      <ProductOption>
        <span>{listInfo.option}</span>
        <FormButton
          text="변경"
          addClass={"width: 9rem; height: 4.5rem; border: 0.15rem solid black;"}
        />
      </ProductOption>
      <ProductCount>
        <span>{listInfo.count}</span>
        <FormButton
          text="변경"
          addClass={"width: 9rem; height: 4.5rem; border: 0.15rem solid black;"}
        />
      </ProductCount>
      <span
        style={{
          width: "8.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listInfo.price}
      </span>
      <span
        style={{
          width: "8rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listInfo.delivery}
      </span>
    </ListWrapper>
  );
}

SelectedProductList.propTypes = {
    classes: PropTypes.string,
    listInfo: PropTypes.shape({
        image: PropTypes.string,
        productName: PropTypes.string,
        option: PropTypes.string,
        count: PropTypes.number,
        price: PropTypes.number,
        delivery: PropTypes.number,
    }),
};

const ListWrapper = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  span {
    ${(props) => props.theme.fontStyles.text}
  }
  border-bottom: solid 0.15rem #e8e8e8;
`;

const CustomCheckboxLabel = styled.label`
  position: relative;
  padding-left: 2.5rem;
  cursor: pointer;
  font-size: 16px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ span {
    background-color: transparent;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.2rem;
      height: 1.2rem;
      background-color: black;
      border-radius: 50%;
    }
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2rem;
  width: 2rem;
  background-color: transparent;
  border: 0.135rem solid black;
  border-radius: 50%;
`;

const ProductImg = styled.img`
  height: 12rem;
  width: 12rem;
`;

const ProductOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    width: 15rem;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
`;

const ProductCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    width: 10.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
`;

export default withAuth(ProductList, { block: pageBlock.UNAUTHENTICATED });
