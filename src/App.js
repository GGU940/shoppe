import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./css/my_reset.css";
import "./css/App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
