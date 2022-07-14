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
        />}>
        </Route>
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
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      </BrowserRouter>
      <a href="https://www.flaticon.com/free-icons/world" 
      title="world icons">World icons created by Freepik - Flaticon</a>
    </div>
  );
}



export default App;
