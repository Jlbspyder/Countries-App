import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Country from "./components/Country";

function App() {
  const [lightMode, setLightMode] = useState(true);
  const handleMode = () => {
   const toggle = document.querySelector(".toggle-mode");
    toggle.addEventListener("click", () => {
      if (lightMode) {
        document.body.classList.add("darkmode");
        setLightMode(false);
      }
      if (!lightMode) {
        document.body.classList.remove("darkmode");
        setLightMode(true);
      }
    });
  };
  return (
    <Router>
      <Header mode={handleMode} lightMode={lightMode} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Countries lightMode={lightMode} mode={handleMode} />}
        />
        <Route
          path="/:name"
          element={<Country lightMode={lightMode} mode={handleMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
