import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import FormButton from "../../../components/button/FormButton";
import theme from "../../../styles/theme";
import { styled } from "styled-components";
import PropTypes from "prop-types";

export default function InterestProductList({ data }) {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const buyProductClicked = () => {
      navigate("/buyproduct");
    };

    const addCartClicked = () => {
        const ok = window.confirm("상품이 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?")
        if (ok) {
            navigate("/shoppingcart");
        }    
    };

    return (
        <ListWrapper>
            <CustomCheckboxLabel>
                <HiddenCheckbox
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <Checkmark className={isChecked ? 'checked' : ''} />
            </CustomCheckboxLabel>
            <ProductImg src={data.image} />
            <span 
                style={{
                    width: "25rem",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {data.product_name}
            </span>
            <span
                style={{
                    width: "9rem",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {data.price}
            </span>
            <span
                style={{
                    width: "8rem",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                2,500
            </span>
            <SelectButton>
                <FormButton
                    text="주문하기"
                    addClass={
                    "width: 18rem; height: 4.5rem; border: 0.15rem solid black;"
                    }
                    onClick={buyProductClicked}
                />
                <FormButton
                    text="장바구니담기"
                    addClass={
                    "width: 18rem; height: 4.5rem; border: 0.15rem solid black;"
                    }
                    onClick={addCartClicked}
                />
                <FormButton
                    text="삭제"
                    addClass={
                    "width: 18rem; height: 4.5rem; border: 0.15rem solid black;"
                    }
                />
            </SelectButton>
        </ListWrapper>
    );
}

InterestProductList.propTypes = {
    classes: PropTypes.string,
    listInfo: PropTypes.shape({
        image: PropTypes.string,
        productName: PropTypes.string,
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
    border-bottom: solid 0.15rem #E8E8E8
`;

const CustomCheckboxLabel = styled.label`
    position: relative;
    padding-left: 2.5rem;
    cursor: pointer;
    font-size: 16px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ span {
        background-color: transparent;
        &::before {
        content: '';
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

const SelectButton = styled.div`
    height: 15rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`