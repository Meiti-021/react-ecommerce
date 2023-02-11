import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeadphonesPage from "./pages/HeadPhonePage";
import LandingPage from "./pages/LandingPage";
import LaptopPage from "./pages/LaptopPage";
import MobilePage from "./pages/MobilePage";
import ProductInfo from "./pages/ProductInfo";
import ShopCart from "./pages/ShopCart";
import TvPage from "./pages/SmartTvPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mobiles" element={<MobilePage />} />
          <Route path="/tvs" element={<TvPage />} />
          <Route path="/headphones" element={<HeadphonesPage />} />
          <Route path="/laptops" element={<LaptopPage />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path={"/products/:id"} element={<ProductInfo />} />
          <Route path={"/*"} element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
