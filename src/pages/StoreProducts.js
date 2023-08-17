import { useLocation } from "react-router-dom";
import WebBanner from "../components/banner/WebBanner";
import StoreBody from "../components/store/StoreBody";
import { hotOrNew } from "../state/LabelState";
import BannerSearch from "../components/banner/BannerSearch";
import useGetBrandProducts from "../apis/get/useGetBrandProducts";
import { useState } from "react";

export default function StoreProducts() {
  const { state } = useLocation();
  const [categoryState, setCategoryState] = useState(0);
  const brandCategoryClicked = (index) => {
    setCategoryState(index);
  };
  const { brandProducts, isLoading, error } = useGetBrandProducts(state);
  console.log(brandProducts);
  return (
    <>
      <WebBanner text={state} />
      {!isLoading ? (
        <>
          <BannerSearch
            onClick={brandCategoryClicked}
            categories={["HOT", "NEW", ...brandProducts.categorys]}
            categoryState={categoryState}
          />
          <StoreBody storeData={brandProducts.products} />
        </>
      ) : null}
    </>
  );
}
