import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
