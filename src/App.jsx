import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceForm from "./pages/ServiceForm";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Service Form Page */}
        <Route path="/service-form" element={<ServiceForm />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;