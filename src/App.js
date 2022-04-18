import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Pages
import HomePage from "./components/pages/Home";
import GranJeroPage from "./components/pages/GranJero";
import Ancestral from "./components/pages/Ancestral";
import AcercaDeLaCar from "./components/pages/AcercaDeLaCAR";
import AsiTrabajamosNuestroTerrritorio from "./components/pages/AsiTrabajamosNuestroTerrritorio";
import NotFoundPage from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gran-jero" element={<GranJeroPage />} />
        <Route path="/ancestral" element={<Ancestral />} />
        <Route path="/acerca-de-la-car" element={<AcercaDeLaCar />} />
        <Route
          path="/asi-trabajamos-nuestro-territorio"
          element={<AsiTrabajamosNuestroTerrritorio />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
