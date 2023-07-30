import { styled } from "styled-components";
import { Default, Desktop, Mobile, Tablet } from "./assets/mediaQuery";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />}></Route>
    </Routes>
  );
}

export default App;
