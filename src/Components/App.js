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
import NewRoutes from "./routes/NewRoutes";
import WatchesRoutes from "./routes/WatchesRoutes";
import Error404 from "./Pages/Error404";

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
        <Route path ="New" element={<NewShopAllNewArrivals 
            direccion={"/NEW"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'NEW'}
        />}></Route>
        <Route path="New" element={< NewRoutes />}>
        <Route path="COMING%20SOON" element={<NewShopAllNewArrivalsTwo 
            direccion={"NEW/COMING SOON"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'MENS NEW ARRIVALS'}
        />}
        />
        <Route path="MENS%20NEW%20ARRIVALS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/'MENS NEW ARRIVALS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'MENS NEW ARRIVALS'}
        />}
        />
        <Route path="SHOP%20ALL%20NEW%20ARRIVALS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/SHOP ALL NEW ARRIVALS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'SHOP ALL NEW ARRIVALS'}
        />}
        />
        <Route path="SHOP%20NEW%20ARRIVALS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/SHOP NOW ARRIVALS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'SHOP ALL NEW ARRIVALS'}
        />}
        />
        <Route path="TIMEX%20X%20STRANGER%20THINGS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/TIMEX X STRANGER THINGS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'TIMEX X STRANGER THINGS'}
        />}
        />
        <Route path="TIMEX%20X%20UFC" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/TIMEX X UFC"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'TIMEX X UFC'}
        />}
        />
        <Route path="WOMENS%20NEW%20ARRIVALS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/NEW/WOMENS NEW ARRIVALS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'WOMENS NEW ARRIVALS'}
        />}
        />
        </Route>
        <Route path="WATCHES/:id" element={<WatchesRoutes  relojes={"http://localhost:5000/submenu/two/all"}/>}>
        <Route index element={<NewShopAllNewArrivals 
            direccion={"/WATCHES"}
            relojes={''}
            name={'WATCHES'}
        />} />

        <Route path="MENS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/WATCHES/MENS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'MENS NEW ARRIVALS'}
        />}
        /> 
        <Route path="SHOP%20BY%20COLLECTION" element={<NewShopAllNewArrivalsTwo 
            direccion={"/WATCHES/SHOP BY COLLECTION"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'SHOP ALL NEW ARRIVALS'}
        />}
        />
        <Route path="TRENDING" element={<NewShopAllNewArrivalsTwo 
            direccion={"WATCHES/TRENDING"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'TRENDING'}
        />}
        />
        <Route path="WOMENS" element={<NewShopAllNewArrivalsTwo 
            direccion={"/WATCHES/WOMENS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'WOMENS NEW ARRIVALS'}
        />}
        />
        </Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      </BrowserRouter>
      <a href="https://www.flaticon.com/free-icons/world" 
      title="world icons">World icons created by Freepik - Flaticon</a>
    </div>
  );
}



export default App;
