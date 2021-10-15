import React, { useState } from "react";
import "./App.css";
import { About } from "./pages/components/About";
import { Banner } from "./pages/components/Banner";

import { Header } from "./pages/components/Header";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div id="page">
      <Header name="Hadi Najafi" setPage={setPage} />
      <div id="main" className="site-main">
        {page === "Home" && <Banner name="Hadi" family="Najafi" />}
        {page === "About Me" && <About />}
      </div>
    </div>
  );
}

export default App;
