import { Routes, Route } from "react-router-dom";
import Connexion from "./Pages/connexion";
import Inscription from "./Pages/inscription";

function App() {
  return (
    <Routes>
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="*" element={<Connexion />} />
    </Routes>
  );
}

export default App;
