import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/weather" element={<Weather></Weather>}></Route>
      </Routes>
    </>
  );
}

export default App;
