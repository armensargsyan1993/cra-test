import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/about">about</Link>
        <Redirectt />
        <Routes>
          <Route path="/home" />
          <Route path="/about" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Redirectt = () => {
  const nav = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    nav(`${pathname}/home`);
  }, []);

  return null;
};
