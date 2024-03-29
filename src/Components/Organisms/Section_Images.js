import "../../ComponentsCss/Organims/SectionImages.css";
import { Link } from "react-router-dom"

const SectionImages = () => {
    
    return(
        <div className="contendImages">
            <div className="contend_one_section background_one">
                <div className="contend_header">
                    <h1>TIMEX</h1> |
                    <h3>
                        NETFLIX <br />
                        STRANGER <br />
                        THINHS <br />
                    </h3>
                </div>
                <div className="contend_parrafo">
                    <p>Timex T80 featuring a <br />
                    customized alarm with <br />
                    Stranger Things melody</p>
                </div>
                <div className="keep_time">
                    <p>KEEP TIME IN ANY <span className="demension">DEMENSION</span></p>
                </div>
            </div>
            <div className="contend_two_section background_two">
                <div>
                    <p className="parrafo_one_section">
                    Hailing a parallel universe, authentic Stranger <br />
                    Things graphics creep across our Timex T80 x <br />
                    Stranger Things watch and the otherworldly styles of <br />
                    this collection
                    </p>
                </div>
                <div>
                    <p className="Our_indiglo">
                        Our INDIGLO backlight permeates the shadows with <br />
                        an ominous hidden image, and our two digital <br />
                        watches, which made their first debut around the <br />
                        time of Will Byers mysterious disappearance in 1983, <br />
                        feature a customized alarm with the Stranger Things <br />
                        melody. Things really start to get mental once the <br />
                        clock stikes 3:00p.m, revealing a backwards number <br />
                        3.The reason ? Only time will tell.
                    </p>
                </div>
                <div className="contend_buttons">
                    <Link to="/NEW/SHOP%20NOW/TIMEX%20CAMPER%20X%20STRANGER%20THINGS%2040MM%20FABRIC%20STRAP%20WATCH%20FIVE">
                        <button className="button_add_to_bag">
                            SHOP NOW
                        </button>
                    </Link>
                    <Link to="/NEW/TIMEX%20X%20STRANGER%20THINGS">
                        <button className="button_add_to_bag">
                            LEARN MORE
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SectionImages