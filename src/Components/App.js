import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import Header from "./Templates/Header"; 
import Home from "./Pages/Home";
import "../ComponentsCss/Templates/App.css"
import AdOne from "./Molecules/AdOne";
import NewShopAllNewArrivals from "./Pages/NewShopAllNewArrivals";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
       <>
        <AdOne/>
        <Header/>
       </>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/NEW" element={<NewShopAllNewArrivals 
            direccion={"/NEW"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'NEW'}
        />} />
      </Routes>
      </BrowserRouter>
      <a href="https://www.flaticon.com/free-icons/world" title="world icons">World icons created by Freepik - Flaticon</a>
    </div>
  );
}

export default App;
