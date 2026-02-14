import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:category/:id" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
