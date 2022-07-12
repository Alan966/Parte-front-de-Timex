import "../../ComponentsCss/Atoms/Section_img.css";
import { Link } from "react-router-dom"

const SectionIMg = ({ img, title}) => {
    return(
        <section className="section_img">
            <img className="img_the_section" 
            src={img} alt={title} />
            <div className="contend_center">
            <h2 className="title_img_section">
                {
               title
                }
            </h2>
            </div>
            <div className="Watch_video_button">
                <Link to="https://www.youtube.com/watch?v=ex8IQpUAhbg">WATCH VIDEO</Link>
            </div>
        </section>
    )
}

export default SectionIMg