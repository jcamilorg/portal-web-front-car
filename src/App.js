import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Componentes
import HomePage from "./components/pages/Home";
import GranJeroPage from "./components/pages/GranJero";
import Ancestral from "./components/pages/Ancestral";
import NotFoundPage from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gran-jero" element={<GranJeroPage />} />
        <Route path="/ancestral" element={<Ancestral />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
