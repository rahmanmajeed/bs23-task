import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <>
      <div className="relative">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.slug}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
