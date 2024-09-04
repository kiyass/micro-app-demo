import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="content">
      <div>
        <Link to="/app-1-1">app-1-1</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<div>app-1 home</div>} />
        <Route
          exact
          path={`/app-1-1/*`}
          element={
            <micro-app
              name="app-1-1"
              url="http://localhost:8002/"
              iframe
              router-mode="native"
              baseroute={window.__MICRO_APP_BASE_ROUTE__ + "app-1-1"}
            ></micro-app>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
