import { useParams } from "react-router-dom";
import "../../../ComponentsCss/Pages/Smartwarches/SmartWatches.css"
import { Link } from "react-router-dom";
import { useRef } from "react";
import images from "../../Templates/images";

const SMARTWATCHES = () => {

    const { id} = useParams();
    const ref = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refFour = useRef(null);
    const refFive = useRef(null);
    const refSix = useRef(null);
    const refSeven = useRef(null);
    const refEight = useRef(null);
    const refNine = useRef(null);
    const refTen = useRef(null);
    const refEleven = useRef(null);
    const refTwelve = useRef(null);



    const claseAsing = id.replace(/ /g, "");


    const cambiarImagen = () => {
        ref.current.classList.toggle('active');
    }

    const cambiarImagenTwo = () => {
        refTwo.current.classList.toggle('active');
    }

    const cambiarSectionOne = () => {
        refThree.current.classList.add('active');
        refFour.current.classList.add('desactive');

        refThree.current.classList.remove('desactive');
        refFour.current.classList.remove('active');
    }
    const cambiarSectionTwo = () => {
        refThree.current.classList.add('desactive');
        refFour.current.classList.add('active');

        refThree.current.classList.remove('active');
        refFour.current.classList.remove('desactive');
    }

    const cambiarSmartWatch = (id, id2)=> {
        id.current.classList.remove('active');
        id2.current.classList.remove('active');
    }
    const cambiarSmartWatchCicle = (id, id2)=> {
        id.current.classList.add('active');
        id2.current.classList.add('active');
    }

    const cambiarReloj = (id) => {
        let validar = id.current.className
        let validarTwo = validar.includes("active")
        if(validarTwo === true){
            if(validar.includes("one")){
                id.current.classList.add('two');
                id.current.classList.remove('one');
            }else if(validar.includes("two")){
                id.current.classList.add('three');
                id.current.classList.remove('two');
            }
            else if(validar.includes("three")){
                id.current.classList.add('four');
                id.current.classList.remove('three');
            }
            else if(validar.includes("four")){
                id.current.classList.add('five');
                id.current.classList.remove('four');
                }
            else if(validar.includes("five")){
                id.current.classList.add('one');
                id.current.classList.remove('five');
                }
            else{
                id.current.classList.add('one');
            }
        }else{
            if(validar.includes("one")){
                id.current.classList.add('two');
                id.current.classList.remove('one');
            }else if(validar.includes("two")){
                id.current.classList.add('three');
                id.current.classList.remove('two');
            }
            else if(validar.includes("three")){
                id.current.classList.add('four');
                id.current.classList.remove('three');
            }
            else if(validar.includes("four")){
                id.current.classList.add('one');
                id.current.classList.remove('four');
                }
            else{
                id.current.classList.add('one');
            }
        }
    }
    const cambiarRelojTwo = (id) => {
        let validar = id.current.className
        let validarTwo = validar.includes("active")
        if(validarTwo === true){
            if(validar.includes("one")){
                id.current.classList.add('five');
                id.current.classList.remove('one');
            }else if(validar.includes("two")){
                id.current.classList.add('one');
                id.current.classList.remove('two');
            }
            else if(validar.includes("three")){
                id.current.classList.add('two');
                id.current.classList.remove('three');
            }
            else if(validar.includes("four")){
                    id.current.classList.add('three');
                    id.current.classList.remove('four');
                }
            else if(validar.includes("five")){
                    id.current.classList.add('four');
                    id.current.classList.remove('five');
                }
            else{
                id.current.classList.add('one');
            }
        }else{
            if(validar.includes("one")){
                id.current.classList.add('four');
                id.current.classList.remove('one');
            }else if(validar.includes("two")){
                id.current.classList.add('one');
                id.current.classList.remove('two');
            }
            else if(validar.includes("three")){
                id.current.classList.add('two');
                id.current.classList.remove('three');
            }
            else if(validar.includes("four")){
                    id.current.classList.add('three');
                    id.current.classList.remove('four');
                }
            else{
                id.current.classList.add('one');
            }
        }
    }

    const JuntarAccionTwo = (id1, id2, id3) => {
        cambiarRelojTwo(id1)
        cambiarRelojTwo(id2)
        cambiarRelojTwo(id3)
    }

    const JuntarAccion = (id1, id2, id3) => {
        cambiarReloj(id1)
        cambiarReloj(id2)
        cambiarReloj(id3)
    }


    return(
        <main>
            <section className={`main-${claseAsing}`}>
            <h1 className="title_smart">{id}</h1>
            <p className="parrafo_all">All the functions you need with up to two weeks of 
                battery life
            </p>
            <div className="contend_contend_button">
                <div className="contendButton">
                    <Link className="ShopNow Large smartwatches" 
                    to="#">
                        SHOP METROPOLITAN
                    </Link> 
                </div>
            </div>
            </section>
           <article className="article_grid_two">
           <section className="section_two">
                <div ref={ref} className="contend_img_smarth"></div>
                <div className="contend_buttton_watches">
                 <div className="circle_circulo" onClick={cambiarImagen}> </div> 
                 <div className="cuadro_cuadrado" onClick={cambiarImagen}></div>  
                <Link className="ShopNow Large smartwatches" 
                    to="#">
                        SHOP NOW
                    </Link>
                </div>
            </section>
            <section className="section_two">
                <div ref={refTwo} className="contend_img_smarth black"></div>
                <div className="contend_buttton_watches">
                 <div className="circle_circulo dark" onClick={cambiarImagenTwo}> </div> 
                 <div className="cuadro_cuadrado dark" onClick={cambiarImagenTwo}></div>  
                <Link className="ShopNow Large smartwatches" 
                    to="#">
                        SHOP NOW
                    </Link>
                </div>
            </section>
           </article>
            <section className="section_three">
                <h1>What we're 
                    made of
                </h1>
                <div className="section_contend_reglas">
                    <div className="contendCard_reglas one" ref={refThree}>
                        < div className="card_reglas">
                            <img src={images.TouchScreen} alt="manoHaciendoClick" />
                            <div>
                                <h2>High-Resolution AMOLED Touch Display</h2>
                                <p>Our always-on display looks bright and crisp in any light</p>
                            </div>
                        </div>
                        <div className="card_reglas">
                            <img src={images.WallClock} alt="reloj" />
                            <div>
                                <h2>Custom Watch Faces</h2>
                                <p>Change your look without changing your watch 
                                    with custom watch dials that can be updated from the app
                                </p>
                            </div>
                        </div>
                        <div className="card_reglas">
                            <img src={images.LowBattery} alt="seAcaboLaBateria" />
                            <div>
                                <h2>Up to 12-14 Days Battery Life</h2>
                                <p>Go all day and into the night with an extended 
                                    batterry life
                                </p>
                            </div>
                        </div>
                        <div className="card_reglas">
                        <img src={images.Running} alt="CorrecYactivarGPS" />
                            <div>
                                <h2>HearFIT and On-Board GPI</h2>
                                <p>Track how hard your body is working with a rellable 
                                    and accurate continuous on-wrist heart rate monitor 
                                    Also includes a phone-free GPS connection allowring 
                                    you to track distace and pace right at your wrist
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="contendCard_reglas two" ref={refFour}>
                        <div className="card_reglas">
                            <img src={images.WaterDrop} alt="gotaDeAgua" />
                            <div>
                                <h2>30-Meters Water Resistant</h2>
                                <p>Every Timex is water resistant, and our smartWatches 
                                    should be no different
                                </p>
                            </div>
                        </div>
                        <div className="card_reglas">
                            <img src={images.Message} alt="Notifications" />
                            <div>
                                <h2>Notifications</h2>
                                <p>Don't miss a call, text or app notiication with 
                                    a simple glance at your wrist
                                </p>
                            </div>
                        </div>
                        <div className="card_reglas">
                            <img src={images.FootPrints} alt="seAcaboLaBateria" />
                            <div>
                                <h2>{`Activity & Sleep Tracker`}</h2>
                                <p> Discover insights to your health all day and night 
                                </p>
                            </div>
                        </div>
                        <div className="card_reglas">
                        <img src={images.Muscle} alt="Brazo bien mamado" />
                            <div>
                                <h2>Aluminum Alloy Case and Gorilla Glass</h2>
                                <p>Made with a strong metal case and scratch-resistant 
                                    Gorilla Glass lens, it wouldn't be a Timex if it couldn't 
                                    take a ilcking
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="contendButtons">
                    <div className="button-left" onClick={cambiarSectionOne}></div>
                    <div className="button-right" onClick={cambiarSectionTwo}></div>
                </div>
            </section>
            <section className="section_four">
                <img src={images.SectionFour} alt="relojesTwo" />
                <div>
                    <h2>Your <br /> 
                     <span>that text mademy <br /> heart race</span> 
                    smartwatch
                    </h2>
                    <p>Over a hundred years of watchmaking has taught us, your watch <br /> becomes part of your sould With notifications and fitness sensors, <br /> that boand is even stronger </p>
                </div>
            </section>
            <section className="section_five">
                <section>
                    <h2>Swipe Your Style</h2>
                    <p>Custom watch faces let you 
                        make a true match to your look, 
                        your event or even your mood
                    </p>
                </section>
                <article>
                <div className="contend_one_relojesCambian">
                    <div className="contend_relojes_cambiantes" ref={refFive}>
                      <div className="imagenes_que_cambian active" ref={refSix}>

                      </div>
                      <div className="contendButtons cambiar_images">
                            <div className="button-left" onClick={() => cambiarRelojTwo(refSix)}></div>
                            <div className="button-right" onClick={() => cambiarReloj(refSix)}></div>
                      </div>
                    </div>
                    <div className="contend_buttton_watches">
                 <div className="circle_circulo dark" onClick={() =>cambiarSmartWatchCicle(refFive, refSix)}> </div> 
                 <div className="cuadro_cuadrado dark" onClick={() => cambiarSmartWatch(refFive, refSix)}></div>  
                <Link className="ShopNow Large smartwatches" 
                    to="#">
                        SHOP NOW
                    </Link>
                </div>
                </div>

                <div className="contend_one_relojesCambian ">
                    <div className="contend_relojes_cambiantes pink" ref={refSeven}>
                      <div className="imagenes_que_cambian active pink" ref={refEight}>

                      </div>
                      <div className="contendButtons cambiar_images">
                            <div className="button-left" onClick={() => cambiarRelojTwo(refEight)}></div>
                            <div className="button-right" onClick={() =>cambiarReloj(refEight)}></div>
                      </div>
                    </div>
                    <div className="contend_buttton_watches">
                 <div className="circle_circulo dark" onClick={() =>cambiarSmartWatchCicle(refSeven, refEight)}> </div> 
                 <div className="cuadro_cuadrado dark" onClick={() =>cambiarSmartWatch(refSeven, refEight)}></div>  
                <Link className="ShopNow Large smartwatches" 
                    to="#">
                        SHOP NOW
                    </Link>
                </div>
                </div>
                </article>
            </section>
            <section className="section_six active"  ref={refNine}
            onTouchStart={() =>cambiarReloj(refNine)}
            onMouseEnter={() =>cambiarReloj(refNine)}
            >
            <div>
                <h1>Play nice with  <br />
                    your phone
                </h1>
                <p>Connect your Metropolitan watch to track steps, distance, <br />
                    calories and more Click throungh below to view app.</p>
            </div>
            <div className="section_seven">
                <div className="contendor_movimiento">
                <div className="img_cambiante"  ref={refTen}></div>
                    <p ref={refEleven} 
                    className="contend_parrafo_sectionSeven"></p>
                    <p className="contend_sub_parrafo" ref={refTwelve}></p>
                </div>
                <div className="contendButtons cambiar_images_two">
                    <div className="button-left_nose" onClick={() => JuntarAccionTwo(refTen, refEleven, refTwelve)}></div>
                    <div className="button-right_nose" onClick={() => JuntarAccion(refTen, refEleven, refTwelve)}></div>
                </div>
            </div>
            </section>
        </main>
    )
}

export default SMARTWATCHES;