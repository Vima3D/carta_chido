import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import QRPage from "./pages/QRPage";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/qr" element={<QRPage />} />
      </Routes>
    </LanguageProvider>
  );
}
