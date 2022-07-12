import images from "../Templates/images";
import { Link } from "react-router-dom"
import { useRef, useEffect } from "react";
import "../../ComponentsCss/Atoms/modal.css"


const Modal = () => {

    const modal = useRef();
    const closeModal = useRef(); 
    const activeModal = useRef();
    const closeModalTwo = useRef();
    const closeButton = useRef(); 

    useEffect(() => {
        const modalOne = modal.current
        const closeModalOne = closeModal.current
        const activeModalOne = activeModal.current
        const closeModalTwoOne = closeModalTwo.current
        const closeButtonOne = closeButton.current

        const toggle = () => modalOne.classList.toggle("active");

        closeModalOne.addEventListener("click", toggle);
        activeModalOne.addEventListener("click", toggle);
        closeModalTwoOne.addEventListener("click", toggle);
        closeButtonOne.addEventListener("click", toggle);

    }, [])

    return(
        <>
        <button className="activeMidal" ref={activeModal}>
            Activar modal
        </button>
        <section className="modile" ref={modal} >
            <div className="content_modile" >
            <div className="x" 
              ref={closeButton}></div>
            <h1>Select Your Country</h1>
            <div className="content_content">
                <Link to="/">
                    <div className="contend_imgBandera" 
                    ref={closeModal}>
                        <img src={images.banderagringa}
                            alt="LaBanderaGringa" />
                        <p>TIMEX.COM</p>
                    </div>
                </Link> 
                <Link to="/" >
                    <div className="contend_imgBandera" 
                    ref={closeModalTwo}>
                        <img src={images.banderaMexicana} 
                        alt="LaBanderaMexicana" />
                        <p>TIMEX.COM.MX</p>
                    </div>
                </Link>
            </div>
            <div className="contend_we_are">
                <p>We are just checjing to see if you wanted to visit your local country </p>
            </div>
            <div className="contend_img_view">
                <img src={images.banderagringa} 
                alt="LaBanderaGringa" />
                <p>View all locations</p>    
            </div>
            </div>
        </section>
        </>
    )
}

export default Modal;