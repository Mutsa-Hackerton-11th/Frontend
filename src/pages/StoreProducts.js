import { useLocation, useParams } from "react-router-dom";
import WebBanner from "../components/banner/WebBanner";
import StoreBody from "../components/store/StoreBody";
import { hotOrNew } from "../state/LabelState";
import BannerSearch from "../components/banner/BannerSearch";
import useGetBrandProducts from "../apis/get/useGetBrandProducts";

export default function StoreProducts() {
  const { id } = useParams();
  const { state } = useLocation();
  const { brandProducts, isLoading, error } = useGetBrandProducts(id);
  console.log(brandProducts);
  const storeCategories = [
    "New",
    "Best",
    "아우터",
    "상의",
    "하의",
    "신발",
    "가방",
    "악세서리",
  ];
  const productData = [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "가죽자켓",
      introduce: "간단 소개",
      likes: 3,
      hotOrNew: hotOrNew.HOT,
      id: 23,
      category: "상의",
      mallName: { state },
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "아우터",
      introduce: "간단 소개",
      likes: 45,
      hotOrNew: hotOrNew.HOT,
      id: 24,
      category: "상의",
      mallName: { state },
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "실크 목도리",
      introduce: "간단 소개",
      likes: 193,
      hotOrNew: hotOrNew.NEW,
      id: 25,
      category: "악세서리",
      mallName: { state },
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "원피스",
      introduce: "간단 소개",
      likes: 450,
      hotOrNew: hotOrNew.HOT,
      id: 26,
      category: "상의",
      mallName: { state },
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "폴리에스테르",
      introduce: "간단 소개",
      likes: 193,
      hotOrNew: hotOrNew.NEW,
      id: 27,
      category: "하의",
      mallName: { state },
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "newProduct",
      introduce: "간단 소개",
      likes: 450,
      hotOrNew: hotOrNew.NEW,
      id: 28,
      category: "가방",
      mallName: { state },
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "나이키 신발",
      introduce: "간단 소개",
      likes: 193,
      hotOrNew: hotOrNew.HOT,
      id: 29,
      category: "신발",
      mallName: { state },
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "아디다스 축구화",
      introduce: "간단 소개",
      likes: 450,
      hotOrNew: hotOrNew.NEW,
      id: 30,
      category: "아우터",
      mallName: { state },
    },
  ];
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
      <WebBanner text={state} />
      <BannerSearch categories={categories} />
      <StoreBody storeData={productData} />
    </>
  );
}
