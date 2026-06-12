import "./App.css";
import SideBar from "./components/layout/SideBar";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

          {/* <TopSellers /> */}
        </div>
      </div>
    </>
  );
}

export default App;
