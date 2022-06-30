import UlcontendOne from "../Molecules/UlcontendOne";
import images from "../Templates/images";
import "../../ComponentsCss/Organims/HeaderPrincipal.css";
import { useRef } from "react";

const HeaderPrincipal = () => {

    const ref = useRef()
    const refTwo = useRef()
    const retThree = useRef()

    const onClickMenu = () => {
         ref.current.classList.toggle("active");
         refTwo.current.classList.toggle("header_active");
         retThree.current.classList.toggle("desplace_70vw");
    }
    return(
        <div className="header_principal" ref={retThree}>
            <div className="hamburguer-button" ref={ref} onClick={onClickMenu}>
                <div className="line"></div>
            </div>
            <div className="contend_one">
                    <h1>TIMEX</h1>
            </div>
            <header className="header" ref={refTwo}>
                <nav className="nav">
                    <UlcontendOne 
                    _id={1} 
                    key={1} 
                    url={`http://localhost:5000/submenu/one/all`} 
                    urlTwo={`http://localhost:5000/submenu/two/all`}
                    urlThree={`http://localhost:5000/submenu/three/all`}
                    />
                </nav> 
            </header> 
            <div className="contend_shop">
                    <img src={images.shoppingCard32} className="img_shopping_two" />
            </div>
        </div>
    )
}
export default HeaderPrincipal;