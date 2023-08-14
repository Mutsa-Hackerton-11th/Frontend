import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Store from "./pages/Store";
import About from "./pages/About";
import Header from "./components/header/Header";
import ServiceInfor from "./pages/informaion/ServiceInfor";
import EntryInfor from "./pages/informaion/EntryInfor";
import FeeInfor from "./pages/informaion/FeeInfor";
import LogIn from "./pages/authentication/LogIn";
import SignUp from "./pages/authentication/SignUp";
import BuyerMyPage from "./pages/buyer_mypage/BuyerMyPage";
import ShoppingCart from "./pages/buyer_mypage/shoppingcart/ShoppingCart";
import OrderList from "./pages/buyer_mypage/orderlist/OrderList";
import InterestProduct from "./pages/buyer_mypage/InterestProduct";
import SellerMyPage from "./pages/seller_mypage/SellerMyPage";
import SellerInfor from "./pages/seller_mypage/SellerInfor";
import StoreEntry from "./pages/seller_mypage/StoreEntry";
import ProductManage from "./pages/seller_mypage/ProductManage";
import OrderMange from "./pages/seller_mypage/OrderManage";
import ProductUpload from "./pages/seller_mypage/ProductUpload";
import StoreProducts from "./pages/StoreProducts";
import ProductDetail from "./pages/ProductDetail";
import BuyProduct from "./pages/BuyProduct";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/store/:id" element={<StoreProducts />}></Route>
        <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
        <Route path="/buyproduct" element={<BuyProduct />}></Route>

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
        <Route path="/storeentry" element={<StoreEntry />}></Route>
        <Route path="/productmanage" element={<ProductManage />}></Route>
        <Route path="/ordermanage" element={<OrderMange />}></Route>
        <Route path="/productupload" element={<ProductUpload />}></Route>
      </Routes>
    </>
  );
}

export default App;
