import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Blog } from "./pages/blog/Blog";
import { Cs } from "./pages/cs/Cs";
import { Double } from "./pages/double/Double";
import { Introduce } from "./pages/introduce/Introduce";
import { Product } from "./pages/product/Product";
import { Shop } from "./pages/shop/Shop";
import { NotFound } from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyled } from "./styles/globalStyle";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cs" element={<Cs />} />
          <Route path="/double" element={<Double />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
