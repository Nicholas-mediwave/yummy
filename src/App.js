import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./yummy-pages/Home";
import { AddRecipies } from "./yummy-pages/AddRecipies";
import { ViewRecipies } from "./yummy-pages/ViewRecipies";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddRecipies" element={<AddRecipies />} />
        <Route path="/ViewRecipies" element={<ViewRecipies />} />
      </Routes>
    </Router>
  );
}

export default App;
