import { useLocation } from "react-router-dom";
import WebBanner from "../components/banner/WebBanner";
import StoreBody from "../components/store/StoreBody";
import { hotOrNew } from "../state/LabelState";
import BannerSearch from "../components/banner/BannerSearch";
import useGetBrandProducts from "../apis/get/useGetBrandProducts";

export default function StoreProducts() {
  const { state } = useLocation();
  const { brandProducts, isLoading, error } = useGetBrandProducts(state);
  console.log(brandProducts);
  return (
    <>
      <WebBanner text={state} />
      {!isLoading ? (
        <>
          <BannerSearch
            categories={["HOT", "NEW", ...brandProducts.categorys]}
          />
          <StoreBody storeData={brandProducts.products} />
        </>
      ) : null}
    </>
  );
}
