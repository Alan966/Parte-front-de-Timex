import "../../ComponentsCss/Atoms/Section_img.css";
const SectionIMg = ({ img, title}) => {
    return(
        <section className="section_img">
            <img className="img_the_section" 
            src={img} alt={title} />
            <h2 className="title_img_section">
            {
               title
            }</h2>
            <div className="to_mom_with_three">
                <a href="#">
                    <div className="
                    button 
                    button_section_white 
                    watch_video">
                        WATCH VIDEO
                    </div>
                </a>
            </div>
        </section>
    )
}

export default SectionIMg