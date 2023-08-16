import useGetBrands from "../apis/get/useGetBrands";
import WebBanner from "../components/banner/WebBanner";
import StoreBody from "../components/store/StoreBody";
import { hotOrNew } from "../state/LabelState";

export default function Store() {
  const { brands, isLoading, error } = useGetBrands();
  console.log(brands);
  return (
    <>
      <WebBanner text="Store" subText="Home > Store" />
      {!isLoading ? <StoreBody storeData={brands.brands} /> : null}
    </>
  );
}
