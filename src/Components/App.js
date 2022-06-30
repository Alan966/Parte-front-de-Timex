import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import Header from "./Templates/Header"; 
import Home from "./Pages/Home";
import "../ComponentsCss/Templates/App.css"
import AdOne from "./Molecules/AdOne";
import New_Shop_All_New_Arrivals from "./Pages/New_Shop_All_New_Arrivals";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <AdOne/>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/NEW" element={<New_Shop_All_New_Arrivals />} />
      </Routes>
      </BrowserRouter>
      <a href="https://www.flaticon.com/free-icons/world" title="world icons">World icons created by Freepik - Flaticon</a>
    </div>
  );
}

export default App;
