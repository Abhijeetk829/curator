import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdRefresh } from "./components";
import { About, Contact, Home, Privacy, Terms } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <AdRefresh />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:value" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
