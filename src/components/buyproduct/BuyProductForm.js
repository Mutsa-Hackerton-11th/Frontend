import { styled } from "styled-components";
import BuyProductFormCategory from "./BuyProductFormCategory";

export default function BuyProductForm({ formDetail }) {
  return (
    <div
      style={{
        padding: "2rem 0",
      }}
    >
      {formDetail.map((detail, index) => {
        return (
          <BuyProductFormCategory
            key={detail + index}
            text={detail.text ? detail.text : null}
            bigSize={detail.size ? true : null}
            address={detail.address ? true : false}
          />
        );
      })}
    </div>
  );
}
