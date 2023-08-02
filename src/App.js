import { styled } from "styled-components";
import { Default, Desktop, Mobile, Tablet } from "./assets/mediaQuery";
import { Route, Router, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./pages/Main";
import Store from "./pages/Store";
import Pick from "./pages/Pick";
import About from "./pages/About";

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/store" element={<Store />}></Route>
      <Route path="/pick" element={<Pick />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    </>
  );
}

export default App;
