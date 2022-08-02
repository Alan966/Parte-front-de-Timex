import UlcontendOne from "../Molecules/UlcontendOne";
import images from "../Templates/images";
import "../../ComponentsCss/Organims/HeaderPrincipal.css";
import { useRef } from "react";
import { BACKEND } from "../Atoms/backend";

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
            <div className="hamburguer-button" 
            ref={ref} onClick={onClickMenu}>
                <div className="line"></div>
            </div>
            <header className="header" ref={refTwo}>
                <nav className="nav">
                    <UlcontendOne 
                    _id={1} 
                    key={1} 
                    url={`${BACKEND}/submenu/one/all`} 
                    urlTwo={`${BACKEND}/submenu/two/all`}
                    urlThree={`${BACKEND}/submenu/three/all`}
                    />
                </nav> 
            </header> 
            <div className="contend_shop">
                <div className="numero">1</div>
                    <img src={images.shoppingCard32} 
                    className="img_shopping_two" 
                    alt="imgshoppingtwo" />
            </div>
        </div>
    )
}
export default HeaderPrincipal;