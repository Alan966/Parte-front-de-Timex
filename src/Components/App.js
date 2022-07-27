import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import Header from "./Templates/Header"; 
import Home from "./Pages/Home";
import "../ComponentsCss/Templates/App.css"
import AdOne from "./Molecules/AdOne";
import NewShopAllNewArrivalsTwo from "./Pages/Relojes/NewShopAllNewArrivalsSecond";
import Error404 from "./Pages/Error404";
import PagesRelojesSubThree from "./Pages/Relojes/PagesRelojesSubThree";
import NewShopAllNewArrivalsStatic from "./Pages/Relojes/NewShopAllNewArrivalsStatic";
import PagesSeconds from "./Pages/PagesContinuoPages/PagesSeconds";
import PagesSubmenuTwoandThreeAsignacion from "./Pages/PagesContinuoPages/PagesSubmenuTwoandThreeAsignacion";
import CardRelojesComprar from "./Pages/Relojes/CardRelojesComprar";
import Pagostimex from "./Molecules/Pagostimex";
import SMARTWATCHES from "./Pages/SmartWatches/SmartWatches";

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
        <Route path ="New" element={<NewShopAllNewArrivalsStatic 
        direccion={"/NEW"}
        relojes={'http://localhost:5000/relojestotalroute/all'}
        name={'NEW'}
        />}></Route>
        <Route path="New/:id" 
            element={< NewShopAllNewArrivalsTwo
            direccion={"/NEW"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
        />}></Route>
        <Route path="New/:id/:url" element={ <CardRelojesComprar 
        relojes={'http://localhost:5000/relojestotalroute/all'}
        /> }></Route>
        <Route path="WATCHES" element={<NewShopAllNewArrivalsStatic 
        direccion={"/WATCHES"}
        relojes={'http://localhost:5000/relojestotalroute/all'}
        name={'WATCHES'}
        />}/>
        <Route path="WATCHES/:id" element={<PagesRelojesSubThree 
            direccion={"/WATCHES"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'WATCHES'}
        />}></Route>
        <Route path="WATCHES/:id/:url" element={<PagesRelojesSubThree 
            direccion={"/WATCHES"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'WATCHES'}
        />}></Route>


        {/* SMARTWATCHES */}
        <Route path="/SMARTWATCHES" element={<PagesSeconds 
           direccion={"/SMARTWATCHES"}
           relojes={'http://localhost:5000/relojestotalroute/all'}
           name={'SMARTWATCHES'}
        />}></Route>
        <Route path="/SMARTWATCHES/:id" element={<SMARTWATCHES />}></Route>
        <Route path="/SMARTWATCHES/:id/:url" element={<PagesSubmenuTwoandThreeAsignacion 
        direccion={"/SMARTWATCHES"}
        relojes={'http://localhost:5000/relojestotalroute/all'}
        name={'SMARTWATCHES'}
        />}></Route>
        
        {/* CO_LABS */}
        <Route path="/CO_LABS" element={<PagesSeconds 
            direccion={"/CO_LABS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'CO_LABS'}
        />}></Route>
        <Route path="/CO_LABS/:id" element={<PagesSubmenuTwoandThreeAsignacion 
            direccion={"/CO_LABS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'CO_LABS'}
        />}></Route>
        <Route path="/CO_LABS/:id/:url" element={<PagesSubmenuTwoandThreeAsignacion 
            direccion={"/CO_LABS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'CO_LABS'}
        />}></Route>
        {/* BEST SELLERS */}
        <Route path="/BEST%20SELLERS" element={<PagesSeconds 
            direccion={"/BEST SELLERS"}
            relojes={'http://localhost:5000/relojestotalroute/all'}
            name={'BEST SELLERS'}
        />}></Route>
        {/* BLOG */}
        <Route path="/BLOG" element={ <h1>Blog</h1>}></Route>
        <Route path="/BLOG/:id" element={<h1>Holaaaaaaa 2</h1>}></Route>
        <Route path="/BLOG/:id/:url" element={<h1>Holaaaaaaa 3</h1>}></Route>
        {/* COMING SOON */}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Pagostimex />
      </BrowserRouter>
      <a href="https://www.flaticon.com/free-icons/world" 
      title="world icons">World icons created by Freepik - Flaticon</a>
    </div>
  );
}



export default App;
