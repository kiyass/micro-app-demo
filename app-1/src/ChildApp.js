import React from "react";

const ChildApp = () => {
  return (
    <micro-app-1
      name="app-1-1"
      url="http://localhost:8002/"
      iframe
      router-mode="native"
      baseroute={window.__MICRO_APP_BASE_ROUTE__ + "/app-1-1"}
    ></micro-app-1>
  );
};

export default ChildApp;
