import useGetBrands from "../apis/get/useGetBrands";
import WebBanner from "../components/banner/WebBanner";
import StoreBody from "../components/store/StoreBody";
import { hotOrNew } from "../state/LabelState";

export default function Store() {
  const { brands, isLoading, error } = useGetBrands();
  console.log(brands);
  const storeData = [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "뉴진스",
      introduce: "간단 소개",
      hotOrNew: hotOrNew.HOT,
      id: 23,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "무신사",
      introduce: "간단 소개",
      hotOrNew: hotOrNew.HOT,
      id: 24,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "구찌",
      introduce: "간단 소개",
      hotOrNew: hotOrNew.NEW,
      id: 25,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "발렌시아가",
      introduce: "간단 소개",
      hotOrNew: hotOrNew.HOT,
      id: 26,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "아디다스",
      introduce: "간단 소개",
      hotOrNew: hotOrNew.NEW,
      id: 27,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "NIKE",
      introduce: "간단 소개",
      hotOrNew: hotOrNew.NEW,
      id: 28,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "New Balance",
      introduce: "간단 소개",
      hotOrNew: hotOrNew.HOT,
      id: 29,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "LC27",
      introduce: "간단 소개",
      hotOrNew: hotOrNew.NEW,
      id: 30,
    },
  ];
  return (
    <>
      <WebBanner text="Store" subText="Home > Store" />
      <StoreBody storeData={storeData} />
    </>
  );
}
