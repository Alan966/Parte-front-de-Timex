import "../../../ComponentsCss/Pages/Blog/BlogPrincipal.css"
import images from "../../Templates/images";
import { Link } from "react-router-dom";
const BlogPrincipal = () => {

return(
    <main>
        <h1 className="title_principal">The Timex Blog</h1>
        <section className="oneSection">
            <img src={images.backgroundOne} alt="background" />
            <p>
                COLLAB SRANGER THINGS ARE 
                HAPPENING AT TIMEX
            </p>
        </section>
        <Link
         to="/BLOG/CRAFTSMANSHIP"
        >
        <section className="contend_Noticia">
            <img src={images.oneResponsive} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>CRAFTSMANSHIP</h2>
                <h3>FROM WASTE TO WRIST, TIMEX LAUNCHES THE WATERBURY 
                    OCEAN COLLECTION
                </h3>
                <p>
                On World Ocean Day, we’re introducing the Waterbury Ocean collection, created using upcycled, ocean-bound plastic, in partnership with award-winning organization, #tide™.
                </p>
            </div>
        </section>
        </Link>
        <Link to="/BLOG/CRAFTSMANSHIP">
        <section className="contend_Noticia">
            <img src={images.twoResponsive} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>CRAFTSMANSHIP</h2>
                <h3>TIMEX CELEBRATES 50 YEARS OF QUARTZ</h3>
                <p>In the spring of 1972, we unveiled our very first quartz watch 
                    , paving the way for an iconic range of Q Timex timepieces
                </p>
            </div>
        </section>
        </Link>
        <Link to={`/BLOG/COLLABS%20&%20INFLUENCERS`}>
        <section className="contend_Noticia">
            <img src={images.threeResponsive} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>{`COLLABS & INFLUENCERS`}</h2>
                <h3>ANNOUNCING THE FIRST ROUND OF WATCHES FROM THE OFFICIAL TIMEKEEPER OF UFC.</h3>
                <p>Timex and UFC are kicking off their incredible 
                partnership with an ultra-limited run of UFC-branded timepieces</p>
            </div>
        </section>
        </Link>
        <Link to={`/BLOG/COLLABS%20&%20INFLUENCERS`}>
        <section className="contend_Noticia">
            <img src={images.fourResponsive} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>{`COLLABS & INFLUENCERS`}</h2>
                <h3>ANNOUNCING OUR SECOND COLLABORATION WITH THE JAMES BRAND</h3>
                <p>After a sold-out run, The James Breand has returned to the watch world for a second collaboration</p>
            </div>
        </section>
        </Link>
        <Link to="/BLOG/CRAFTSMANSHIP">
        <section className="contend_Noticia">
            <img src={images.fiveResponsive} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>{`TIPS & TRICKS`}</h2>
                <h3>THE BEST FATHER'S DAY GIFTS FOR EVERY KIND OF DAD</h3>
                <p>Explore this year's roundup of some of our best Father's Day watches, designed to be worn and loved for years to come.</p>
            </div>
        </section>
        </Link>
        <Link to={`/BLOG/CRAFTSMANSHIP`}>
        <section className="contend_Noticia">
            <img src={images.sixResponsive} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>DESIGN</h2>
                <h3>GET BACK THE FUTURE WITH THE TIMEX T80</h3>
                <p>Packed with nostalgia, the iconic Timex T80 pays homage to our earliest digital watches Learn the collection's 
                    history and discover our latest styles
                </p>
            </div>
        </section>
        </Link>
        <Link to={`/BLOG/COLLABS%20&%20INFLUENCERS`}>
        <section className="contend_Noticia">
            <img src={images.sevenResponse} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>{`COLLABS & INFLUENCERS`}</h2>
                <h3>STRANGER THINGS ARE HAPPENING AT TIMEX</h3>
                <p>Listen up Mouthbreathers! We're entering the Upside Down with the 
                    Timex x Stranger Things collection
                </p>
            </div>
        </section>
        </Link>
        <Link to="/BLOG/CRAFTSMANSHIP">
        <section className="contend_Noticia">
            <img src={images.eightResponsive} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>CRAFTSMANSHIP</h2>
                <h3>FROM WASTE TO WRIST, TIMEX LAUNCHES THE WATERBURY OCEAN COLLECTION</h3>
                <p>On World Ocean Dya, we're introducing the Waterbury Ocean collection , created using #tide 
                    upcycled ocean-bound plastic
                </p>
            </div>
        </section>
        </Link>
        <Link to="/BLOG/CRAFTSMANSHIP">
        <section className="contend_Noticia">
            <img src={images.nineResponsive} alt="img_relojes" />
            <div className="contend_relojes">
                <h2>HERITAGE</h2>
                <h3>HERITAGE-INSPIRED DESIGN TAKES THE PLUNGE WITH THE WATERBURY DIVE AUTOMATIC</h3>
                <p>Influenced by the purpose-built timepieces of the mid-twentieth century the dive-inspired Waterbury Dive 
                    Automatic beckons to adventure on land and sea
                </p>
            </div>
        </section>
        </Link>
    </main>
)
}
export default BlogPrincipal;