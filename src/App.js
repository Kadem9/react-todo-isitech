import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ma-liste" element={<Todo />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
