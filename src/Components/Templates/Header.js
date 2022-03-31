import AdOne from "../Molecules/AdOne";
import Buscador from "../Organisms/Buscador";
import HeaderPrincipal from "../Organisms/HeaderPrincipal";
import '../styles.css'

const Header = () => {
return(
    <div className="contend_header">
        <AdOne/>
        <Buscador />
        <HeaderPrincipal/>
    </div>
)}
export default Header; 
