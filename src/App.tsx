import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdRefresh } from "./components";
import { Home } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <AdRefresh />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:value" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/privacy" element={<Home />} />
        <Route path="/terms" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
