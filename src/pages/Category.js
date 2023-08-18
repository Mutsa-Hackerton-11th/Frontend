import { useState } from "react";
import useGetCategoryProducts from "../apis/get/useGetCategoryProducts";
import BannerSearch from "../components/banner/BannerSearch";
import WebBanner from "../components/banner/WebBanner";
import StoreBody from "../components/store/StoreBody";
import useGetBestSellers from "../apis/get/useGetBestSellers";
import useGetNewSellers from "../apis/get/useGetNewSellers";

export default function Category() {
  const [categoryState, setCategoryState] = useState(0);
  const categoryClicked = (index) => {
    setCategoryState(index);
  };
  const {
    bestSellers,
    isLoading: bestSellersLoading,
    error: bestSellersError,
  } = useGetBestSellers();
  console.log(bestSellers)
  const {
    newSellers,
    isLoading: newSellersLoading,
    error: newSellersError,
  } = useGetNewSellers();
  const { categoryProducts, isLoading, error } = useGetCategoryProducts(
categoryState === 2
      ? "아우터"
      : categoryState === 3
      ? "상의"
      : categoryState === 4
      ? "하의"
      : categoryState === 5
      ? "신발"
      : categoryState === 6
      ? "가방"
      : categoryState === 7
      ? "악세서리"
      : null
  );
  console.log(categoryProducts);
  const categories = [
    "New",
    "Best",
    "아우터",
    "상의",
    "하의",
    "신발",
    "가방",
    "악세서리",
  ];
  return (
    <>
      <WebBanner text="Category" />
      <BannerSearch
        onClick={categoryClicked}
        categoryState={categoryState}
        categories={categories}
      />
      {!bestSellersLoading && categoryState===0 ? (
        <StoreBody productData={bestSellers.popular_products} />
      ) : null}
      {!newSellersLoading && categoryState===1 ? (
        <StoreBody productData={newSellers.new_products} />
      ) : null}
      {!isLoading && categoryState!==0 && categoryState!==1 ? (
        <StoreBody productData={categoryProducts.products} />
      ) : null}
    </>
  );
}
