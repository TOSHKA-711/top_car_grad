import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import SearchResults from "./components/searchResults/SearchResults";
import CarInformation from "./components/searchResults/CarInformation";
import Sale from "./components/sale/Sale";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Book from "./components/booking/Book";
import ChatBox from "./components/chatbox/ChatBox";

function App() {
  return (
    <>
   
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/carInformation" element={<CarInformation />} />
        <Route path="/booking" element={<Book />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/message" element={<ChatBox />} />
        
      </Routes>
    </>
  );
}

export default App;
