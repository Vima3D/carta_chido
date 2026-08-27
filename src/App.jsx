import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import QRPage from "./pages/QRPage";
import { LanguageProvider } from "./context/LanguageContext";
import { OrderProvider } from "./context/OrderContext";

export default function App() {
  return (
    <LanguageProvider>
      <OrderProvider>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/qr" element={<QRPage />} />
        </Routes>
      </OrderProvider>
    </LanguageProvider>
  );
}
