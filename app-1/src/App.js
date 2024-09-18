import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import microApp from "@micro-zoe/micro-app";
import "./App.css";

function App() {
  return (
    <div className="content">
      <div>
        <Link to="/app-1-1">app-1-1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/home">home</Link>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => {
            microApp.router.push({
              name: "app-1-1",
              path: "/app-1/app-1-1/test",
            });
          }}
        >
          跳转 app-1-1
        </button>
      </div>
      <Routes>
        <Route exact path="/home" element={<div>app-1 home</div>} />
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
