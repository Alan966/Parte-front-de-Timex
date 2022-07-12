import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import Header from "./Templates/Header"; 
import Home from "./Pages/Home";
import "../ComponentsCss/Templates/App.css"
import AdOne from "./Molecules/AdOne";
import NewShopAllNewArrivals from "./Pages/Relojes/NewShopAllNewArrivals";
import NewShopAllNewArrivalsTwo from "./Pages/Relojes/NewShopAllNewArrivalsSecond";

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
        <Route path="NEW/COMING%20SOON" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/COMING SOON"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'MENS NEW ARRIVALS'}
        />}
        />
        <Route path="/NEW/MENS%20NEW%20ARRIVALS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/'MENS NEW ARRIVALS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'MENS NEW ARRIVALS'}
        />}
        />
        <Route path="/NEW/SHOP%20ALL%20NEW%20ARRIVALS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/SHOP ALL NEW ARRIVALS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'SHOP ALL NEW ARRIVALS'}
        />}
        />
        <Route path="/NEW/SHOP%20NEW%20ARRIVALS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/SHOP NOW ARRIVALS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'SHOP ALL NEW ARRIVALS'}
        />}
        />
        <Route path="/NEW/TIMEX%20X%20STRANGER%20THINGS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/TIMEX X STRANGER THINGS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'TIMEX X STRANGER THINGS'}
        />}
        />
        <Route path="/NEW/TIMEX%20X%20UFC" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/TIMEX X UFC"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'TIMEX X UFC'}
        />}
        />
        <Route path="/NEW/WOMENS%20NEW%20ARRIVALS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/WOMENS NEW ARRIVALS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'WOMENS NEW ARRIVALS'}
        />}
        />
        <Route path="/WATCHES" element={<NewShopAllNewArrivals 
            direccion={"/WATCHES"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'WATCHES'}
        />} />
        <Route path="/WATCHES/BEST%20SELLERS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/WATCHES/BEST SELLERS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'TRENDING'}
        />}
        />
        <Route path="/WATCHES/MENS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/WATCHES/MENS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'MENS NEW ARRIVALS'}
        />}
        />
      </Routes>
      </BrowserRouter>
      <a href="https://www.flaticon.com/free-icons/world" 
      title="world icons">World icons created by Freepik - Flaticon</a>
    </div>
  );
}



export default App;
