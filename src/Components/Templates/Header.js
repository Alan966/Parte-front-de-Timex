import Buscador from "../Organisms/Buscador";
import HeaderPrincipal from "../Organisms/HeaderPrincipal";
import '../styles.css'
import "../../ComponentsCss/Templates/Header.css"

const Header = () => {
return(
    <div className="contend_header">
        <Buscador/>    
        <HeaderPrincipal  />
    </div>
)}
export default Header; 
