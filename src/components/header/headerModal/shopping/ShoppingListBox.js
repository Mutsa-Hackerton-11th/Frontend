import { styled } from "styled-components";
import PropTypes from "prop-types";
import DeleteShoppingList from "../../../../icons/delete/DeleteShoppingList";

export default function ShoppingListBox({ listInfo }) {
  return (
    <ListWrapper>
      <ProductImg src={listInfo.image} />
      <ProductNameAndPrice>
        <div>{listInfo.productName}</div>
        <div>
          <span>{listInfo.count} x </span>
          <span
            style={{
              color: "#B88E2F",
            }}
          >
            {listInfo.price}
          </span>
        </div>
      </ProductNameAndPrice>
      <DeleteButton>
        <DeleteShoppingList />
      </DeleteButton>
    </ListWrapper>
  );
}

ShoppingListBox.propTypes = {
  classes: PropTypes.string,
  listInfo: PropTypes.shape({
    image: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.string,
    productName: PropTypes.string,
  }),
};

const ListWrapper = styled.div`
  width: 36.6rem;
  height: 10.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ProductImg = styled.img`
  width: 30%;
  height: 100%;
  border-radius: 1rem;
`;

const ProductNameAndPrice = styled.div`
  width: 50%;
  height: 100%;
  div {
    ${(props) => props.theme.fontStyles.subText}
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #000;
`;

const DeleteButton = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
