import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);

  const d = new Date();
  return (
    <div className="App">
      <div>{d.toString()}</div>
      <Link to="/">Home</Link>
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
