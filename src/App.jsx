import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoute";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
          {/* <Route path="/admin/*" element={<AdminPannel />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
