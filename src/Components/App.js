import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import Header from "./Templates/Header"; 
import SliderShowPage from "./Organisms/SliderShowPage";


function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
      <SliderShowPage />
      <a href="https://www.flaticon.com/free-icons/world" title="world icons">World icons created by Freepik - Flaticon</a>
    </div>
  );
}

export default App;
