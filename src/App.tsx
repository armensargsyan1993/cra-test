import "./App.css";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const getStyles = (color: "red" | "blue") => {
  return {
    width: 200,
    height: 200,
    backgroundColor: color,
  };
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/cra-test">
        <Routes>
          <Route path="/" element={<div style={getStyles("red")}>1</div>} />
          <Route path="/a" element={<div style={getStyles("blue")}>2</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
