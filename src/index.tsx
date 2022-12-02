import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Route, BrowserRouter, Routes, Link, NavLink } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter basename="/">
      <div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/home" element={<App />} />
          <Route
            path="/about"
            element={
              <div
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: "blue",
                }}
              >
                000000000
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "black",
      }}
    >
      qwert
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
