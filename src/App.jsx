import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import QRPage from "./pages/QRPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/qr" element={<QRPage />} />
    </Routes>
  );
}
