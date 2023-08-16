import { useState } from "react";
import useGetCategoryProducts from "../apis/get/useGetCategoryProducts";
import BannerSearch from "../components/banner/BannerSearch";
import WebBanner from "../components/banner/WebBanner";
import StoreBody from "../components/store/StoreBody";

export default function Category() {
  const [categoryState, setCategoryState] = useState(0);
  const categoryClicked = (index) => {
    setCategoryState(index);
  };
  const { categoryProducts, isLoading, error } = useGetCategoryProducts(
    categoryState === 0
      ? "new"
      : categoryState === 1
      ? "best"
      : categoryState === 2
      ? "outer"
      : categoryState === 3
      ? "top"
      : categoryState === 4
      ? "pants"
      : categoryState === 5
      ? "shoes"
      : categoryState === 6
      ? "bags"
      : categoryState === 7
      ? "acc"
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
      {!isLoading ? (
        <StoreBody
          productData={
            categoryState === 0
              ? categoryProducts.new_products
              : categoryState === 1
              ? categoryProducts.best_products
              : categoryState === 2
              ? categoryProducts.outer_products
              : categoryState === 3
              ? categoryProducts.top_products
              : categoryState === 4
              ? categoryProducts.pants_products
              : categoryState === 5
              ? categoryProducts.shoes_products
              : categoryState === 6
              ? categoryProducts.bags_products
              : categoryState === 7
              ? categoryProducts.acc_products
              : null
          }
        />
      ) : null}
    </>
  );
}
