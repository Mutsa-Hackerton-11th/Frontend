import { Route, Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Store from "./pages/Store";
import About from "./pages/About";
import Header from "./components/header/Header";
import { Desktop } from "./assets/mediaQuery";
import ServiceInfor from "./pages/informaion/ServiceInfor";
import EntryInfor from "./pages/informaion/EntryInfor";
import FeeInfor from "./pages/informaion/FeeInfor";
import LogIn from "./pages/authentication/LogIn";
import SignUp from "./pages/authentication/SignUp";
import BuyerMyPage from "./pages/buyer_mypage/BuyerMyPage";
import ShoppingCart from "./pages/buyer_mypage/ShoppingCart";
import OrderList from "./pages/buyer_mypage/OrderList";
import InterestProduct from "./pages/buyer_mypage/InterestProduct";
import SellerMyPage from "./pages/seller_mypage/SellerMyPage";
import SellerInfor from "./pages/seller_mypage/SellerInfor";
import StoreEntry from "./pages/seller_mypage/StoreEntry";
import ProductManage from "./pages/seller_mypage/ProductManage";
import OrderMange from "./pages/seller_mypage/OrderManage";
import ProductUpload from "./pages/seller_mypage/ProductUpload";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/serviceinfor" element={<ServiceInfor />}></Route>
        <Route path="/entryinfor" element={<EntryInfor />}></Route>
        <Route path="/feeinfor" element={<FeeInfor />}></Route>

        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>

        <Route path="/buyermypage" element={<BuyerMyPage />}></Route>
        <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
        <Route path="/orderlist" element={<OrderList />}></Route>
        <Route path="/interestproduct" element={<InterestProduct />}></Route>

        <Route path="/sellermypage" element={<SellerMyPage />}></Route>
        <Route path="/sellerinfor" element={<SellerInfor />}></Route>
        <Route path="/storeentry" element={<StoreEntry />}></Route>
        <Route path="/productmanage" element={<ProductManage />}></Route>
        <Route path="/ordermanage" element={<OrderMange />}></Route>
        <Route path="/productupload" element={<ProductUpload />}></Route>
      </Routes>
    </>
  );
}

export default App;
