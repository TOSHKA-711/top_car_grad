import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import SearchResults from "./components/searchResults/SearchResults";
import CarInformation from "./components/searchResults/CarInformation";
import Sale from "./components/sale/Sale";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/carInformation" element={<CarInformation />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </>
  );
}

export default App;
