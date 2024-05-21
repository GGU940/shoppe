import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./css/my_reset.css";
import "./css/App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import ShopAll from "./pages/ShopAll";

function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ShopAll" element={<ShopAll />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
