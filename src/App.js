import { Route, Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Store from "./pages/Store";
import Pick from "./pages/Pick";
import About from "./pages/About";
import Header from "./components/header/Header";
import { Desktop } from "./assets/mediaQuery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/pick" element={<Pick />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
