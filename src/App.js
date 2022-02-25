import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./yummy-pages/Home";
import { AddRecipies } from "./yummy-pages/AddRecipies";
import { ViewRecipies } from "./yummy-pages/ViewRecipies";

import "./App.css";

function App() {
  const PageNotFound = () => {
    <div>404 Page not Found</div>;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/AddRecipies" element={<AddRecipies />} />
        <Route path="/ViewRecipies" element={<ViewRecipies />} />
        <Route element={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
