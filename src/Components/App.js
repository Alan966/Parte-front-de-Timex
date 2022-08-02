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
import BlogPrincipal from "./Pages/Blog/BlogPrincipal";
import BlogSecondId from "./Pages/Blog/BlogSecondId";
import { BACKEND } from "./Atoms/backend";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
       <>
        <AdOne/>
        <Header
        url={`${BACKEND}/relojestotalroute/all`}
        />
       </>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="New" element={<NewShopAllNewArrivalsStatic 
        direccion={"/NEW"}
        relojes={`${BACKEND}/relojestotalroute/all`}
        name={'NEW'}
        />}></Route>
        <Route path="New/:id" 
            element={< NewShopAllNewArrivalsTwo
            direccion={"/NEW"}
            relojes={`${BACKEND}/relojestotalroute/all`}
        />}></Route>
        <Route path="/New/:id/:url" element={ <CardRelojesComprar 
        relojes={`${BACKEND}/relojestotalroute/all`}
        /> }></Route>
        <Route path="WATCHES" element={<NewShopAllNewArrivalsStatic 
        direccion={"/WATCHES"}
        relojes={`${BACKEND}/relojestotalroute/all`}
        name={'WATCHES'}
        />}/>
        <Route path="WATCHES/:id" element={<PagesRelojesSubThree 
            direccion={"/WATCHES"}
            relojes={`${BACKEND}/relojestotalroute/all`}
            name={'WATCHES'}
        />}></Route>
        <Route path="WATCHES/:id/:url" element={<PagesRelojesSubThree 
            direccion={"/WATCHES"}
            relojes={`${BACKEND}/relojestotalroute/all`}
            name={'WATCHES'}
        />}></Route>
        <Route path="/WATCHES/:id/:url/:url2" element={ <CardRelojesComprar 
        relojes={`${BACKEND}/relojestotalroute/all`}
        /> }></Route>


        {/* SMARTWATCHES */}
        <Route path="/SMARTWATCHES" element={<PagesSeconds 
           direccion={"/SMARTWATCHES"}
           relojes={`${BACKEND}/relojestotalroute/all`}
           name={'SMARTWATCHES'}
        />}></Route>
        <Route path="/SMARTWATCHES/:id" element={<SMARTWATCHES />}></Route>
        <Route path="/SMARTWATCHES/:id/:url" element={<PagesSubmenuTwoandThreeAsignacion 
        direccion={"/SMARTWATCHES"}
        relojes={`${BACKEND}/relojestotalroute/all`}
        name={'SMARTWATCHES'}
        />}></Route>
        <Route path="/SMARTWATCHES/:id/:url/:url2" element={ <CardRelojesComprar 
        relojes={`${BACKEND}/relojestotalroute/all`}
        /> }></Route>
        
        {/* CO_LABS */}
        <Route path="/CO_LABS" element={<PagesSeconds 
            direccion={"/CO_LABS"}
            relojes={`${BACKEND}/relojestotalroute/all`}
            name={'CO_LABS'}
        />}></Route>
        <Route path="/CO_LABS/:id" element={<PagesSubmenuTwoandThreeAsignacion 
            direccion={"/CO_LABS"}
            relojes={`${BACKEND}/relojestotalroute/all'`}
            name={'CO_LABS'}
        />}></Route>
        <Route path="/CO_LABS/:id/:url" element={<PagesSubmenuTwoandThreeAsignacion 
            direccion={"/CO_LABS"}
            relojes={`${BACKEND}/relojestotalroute/all`}
            name={'CO_LABS'}
        />}></Route>
      <Route path="/CO_LABS/:id/:url/:url2" element={ <CardRelojesComprar 
        relojes={`${BACKEND}/relojestotalroute/all`}
        /> }></Route>

        {/* BEST SELLERS */}
        <Route path="/BEST%20SELLERS" element={<PagesSeconds 
            direccion={"/BEST SELLERS"}
            relojes={`${BACKEND}/relojestotalroute/all`}
            name={'BEST SELLERS'}
        />}></Route>
        <Route path="/BEST%20SELLERS/:id" element={ <CardRelojesComprar 
        relojes={`${BACKEND}/relojestotalroute/all`}
        /> }></Route>
        {/* BLOG */}
        <Route path="/BLOG" element={ <BlogPrincipal />}></Route>
        <Route path="/BLOG/:id" element={<BlogSecondId />}></Route>
        <Route path="/BLOG/:id/:url" element={<BlogSecondId/>}></Route>
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
