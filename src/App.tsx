import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:value" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/privacy" element={<Home />} />
        <Route path="/terms" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
