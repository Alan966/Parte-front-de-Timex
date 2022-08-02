import "../../ComponentsCss/Atoms/Section_img.css";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const SectionIMg = ({ img, img2, title}) => {


    const [imagen, setimagen] = useState(null)

    useEffect(() => {
        if(window.innerWidth > 756 && img2){
            setimagen(img2)
        }else{
            setimagen(img)
        }
    },[window.innerWidth])

    return(
        <section className="section_img">
            {
                imagen && 
                <img className="img_the_section" 
                src={imagen} alt={title} />
            }
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