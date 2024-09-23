import React, { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import microApp from "@micro-zoe/micro-app";
import "./App.css";

const App1 = React.lazy(() => import("./ChildApp"));

function App() {
  return (
    <div className="content">
      <Suspense fallback="">
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
          <Route exact path={`/app-1-1/*`} element={<App1 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
