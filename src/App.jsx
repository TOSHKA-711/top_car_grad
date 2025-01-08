import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/search/Search";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
