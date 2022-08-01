import Buscador from "../Organisms/Buscador";
import HeaderPrincipal from "../Organisms/HeaderPrincipal";
import '../styles.css'
import "../../ComponentsCss/Templates/Header.css"

const Header = ({url}) => {
return(
    <div className="contend_header_header">
        <Buscador
        url={url}
        />    
        <HeaderPrincipal  />
    </div>
)}
export default Header; 
