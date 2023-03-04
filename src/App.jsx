import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeadphonesPage from "./pages/HeadPhonePage";
import LandingPage from "./pages/LandingPage";
import LaptopPage from "./pages/LaptopPage";
import LoginPage from "./pages/LoginPage";
import MobilePage from "./pages/MobilePage";
import ProductInfo from "./pages/ProductInfo";
import ShopCart from "./pages/ShopCart";
import TvPage from "./pages/SmartTvPage";
import WishList from "./pages/WishList";
import Page404 from "./pages/Page404";
import AllOfProducts from "./pages/AllProducts";
import SearchPage from "./pages/SearchPage";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";
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
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/all-products" element={<AllOfProducts />} />
          <Route path="/account-info" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path={"/products/:id"} element={<ProductInfo />} />
          <Route path={"/*"} element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
