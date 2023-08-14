import theme from "../../../styles/theme";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import withAuth from "../../../authHoc/WithAuth";
import { pageBlock } from "../../../state/pageBlockState";

function OrderHistoryList({ listInfo }) {
  return (
    <ListWrapper>
      <span
        style={{
          width: "25rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listInfo.orderNumber}
      </span>
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
      <span
        style={{
          width: "15rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listInfo.option}
      </span>
      <span
        style={{
          width: "8rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listInfo.count}
      </span>
      <span
        style={{
          width: "12rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listInfo.price}
      </span>
      <span
        style={{
          width: "12rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {listInfo.state}
      </span>
    </ListWrapper>
  );
}

OrderHistoryList.propTypes = {
  classes: PropTypes.string,
  listInfo: PropTypes.shape({
    orderNumber: PropTypes.number,
    image: PropTypes.string,
    productName: PropTypes.string,
    option: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
    state: PropTypes.string,
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

const ProductImg = styled.img`
  height: 12rem;
  width: 12rem;
`;

export default withAuth(OrderHistoryList, { block: pageBlock.UNAUTHENTICATED });
