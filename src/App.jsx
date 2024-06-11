import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BuildingDetail from "./pages/BuildingDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/building/:id" element={<BuildingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
