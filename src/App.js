import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Pages
import HomePage from "./components/pages/Home";
import NotFoundPage from "./components/pages/NotFound";
// Sala de prensa importaciones
import {
  Noticias,
  SalaPrensa,
  SeriesCAR,
  Ancestral,
  GranJero,
  MisionRescate,
  HistoriasVidas,
  AudiosCAR,
  ATonoCAR,
  CendocPodcast,
  ATonoCARPodcast,
  GaleriaFotos,
  NewsCAR,
} from "./components/pages/SalaPrensa/index";
// Nosotros importaciones
import {
  Nosotros,
  ResenaHistorica,
  AcercaDeNosotros,
  ObjetivosYFunciones,
  JurisdiccionCAR,
  Organigrama,
} from "./components/pages/Nosotros/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sala-de-prensa" element={<SalaPrensa />}>
          <Route path="noticias" element={<Noticias />} />
          <Route path="series-car" element={<SeriesCAR />}>
            <Route path="ancestral" element={<Ancestral />} />
            <Route path="el-granjero" element={<GranJero />} />
            <Route path="mision-rescate-car" element={<MisionRescate />} />
            <Route path="historias-de-vida" element={<HistoriasVidas />} />
          </Route>
          <Route path="audios-car" element={<AudiosCAR />}>
            <Route path="a-tono-con-la-car" element={<ATonoCAR />} />
            <Route
              path="conocinedo-nuestro-territorio"
              element={<CendocPodcast />}
            />
            <Route
              path="podcast-a-tono-con-la-car"
              element={<ATonoCARPodcast />}
            />
          </Route>
          <Route path="galeria-de-fotos" element={<GaleriaFotos />} />
          <Route path="news-car" element={<NewsCAR />} />
        </Route>
        <Route path="/nosotros" element={<Nosotros />}>
          <Route path="resena-historica" element={<ResenaHistorica />} />
          <Route path="acerca-de-nosotros" element={<AcercaDeNosotros />} />
          <Route
            path="Objetivos-y-funciones"
            element={<ObjetivosYFunciones />}
          />
          <Route path="jurisdiccion-car" element={<JurisdiccionCAR />} />
          <Route path="organigrama" element={<Organigrama />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
