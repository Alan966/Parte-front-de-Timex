import useAxios from "../Atoms/getAxios"
import "../../ComponentsCss/Organims/SectionImages.css";

const SectionImages = ({url}) => {
const [data, error] = useAxios(url)

    
    return(
        <div className="contendImages">
            {
                data.slice(7,9).map(({_id, name}) => {
                    return(
                        <img 
                        src={`http://localhost:5000/home/photo/${_id}`} 
                        alt={name} 
                        className="img_section_img"
                        />
                    )
                })
            }
            <div className="contend_one_section">
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
            <div>
                <div>
                    <p>
                    Hailing a parallel universe, authentic Stranger <br />
                    Things graphics creep across our Timex T80 x <br />
                    Stranger Things watch and the otherworldly styles of <br />
                    this collection
                    </p>
                </div>
                <div>
                    <p>
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
                <div>
                    <a href="#">
                        <button className="button_add_to_bag">
                            SHOP NOW
                        </button>
                    </a>
                    <a href="#">
                        <button className="button_add_to_bag">
                            LEARN MORE
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SectionImages