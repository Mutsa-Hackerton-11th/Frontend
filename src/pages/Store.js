import StoreBanner from "../components/store/StoreBanner";
import StoreBody from "../components/store/StoreBody";
import { hotOrNew } from "../state/LabelState";

export default function Store() {
  const storeData = [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "쇼핑몰 이름",
      introduce: "간단 소개",
      likes: 3,
      hotOrNew: hotOrNew.HOT,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "쇼핑몰 이름",
      introduce: "간단 소개",
      likes: 45,
      hotOrNew: hotOrNew.HOT,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "쇼핑몰 이름",
      introduce: "간단 소개",
      likes: 193,
      hotOrNew: hotOrNew.NEW,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "쇼핑몰 이름",
      introduce: "간단 소개",
      likes: 450,
      hotOrNew: hotOrNew.HOT,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "쇼핑몰 이름",
      introduce: "간단 소개",
      likes: 193,
      hotOrNew: hotOrNew.NEW,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "쇼핑몰 이름",
      introduce: "간단 소개",
      likes: 450,
      hotOrNew: hotOrNew.NEW,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg",
      name: "쇼핑몰 이름",
      introduce: "간단 소개",
      likes: 193,
      hotOrNew: hotOrNew.HOT,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
      name: "쇼핑몰 이름",
      introduce: "간단 소개",
      likes: 450,
      hotOrNew: hotOrNew.NEW,
    },
  ];
  return (
    <>
      <StoreBanner />
      <StoreBody storeData={storeData} />
    </>
  );
}
