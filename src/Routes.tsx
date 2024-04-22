import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateProducts from "./pages/UpdateProducts";
import SideSection from "./components/SideSection";
import ActionBar from "./components/ActionBar";
import Products from "./pages/Products";
import Packs from "./pages/Packs";

const App = () => (
  <BrowserRouter>
    <div style={{ display: 'flex' }}>
      <SideSection />
      <div style={{ width: '50%' }}>
        <ActionBar />
        <Routes>
          <Route path="/" element={<UpdateProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/packs" element={<Packs />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
)

export default App;