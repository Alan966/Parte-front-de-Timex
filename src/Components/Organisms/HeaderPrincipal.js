import Ulcontend from "../Molecules/Ulcontend";
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
                    <Ulcontend
                        _id={1}
                        contraseña={0o1}
                        url={`http://localhost:5000/submenu/one/all`}
                        children={
                    <Ulcontend 
                        url={`http://localhost:5000/submenu/two/all`}
                        _id={2}
                        contraseña={0o2}
                        children={
                    <Ulcontend 
                        url={`http://localhost:5000/submenu/three/all`}
                        _id={3}
                        contraseña={0o3}
                        />
                        }
                            img={`http://localhost:5000/image/imageAll`}
                        />
                        }
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