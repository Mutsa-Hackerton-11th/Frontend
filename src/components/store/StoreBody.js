import { styled } from "styled-components";
import StoreDataBox from "./StoreDataBox";

export default function StoreBody({ storeData, productData }) {
  return (
    <StoreBodyWrapper>
      {storeData.map((store) => {
        return <StoreDataBox key={store} data={store} />;
      })}
    </StoreBodyWrapper>
  );
}

const StoreBodyWrapper = styled.div`
  height: auto;
  padding: 6rem;
  display: flex;
  flex-wrap: wrap;
`;
