import images from "../Templates/images";
import "../../ComponentsCss/Pages/Error404.css"
import { Link } from "react-router-dom";

const Error404 = () => {
return(
    <main className="main_error">
        <div className="contendImages_error_404">
        <h1 className="Error404">Error 404</h1>
            <img src={images.error404} alt="error 404" />
        </div>
        <div className="contendImages_error_404 center">
            <div className="Error404">
               <Link to="/">
                    Sacame de Aqui
               </Link>
            </div>
            <img src={images.Deregreso}
             className="filter_one transicion"
            alt="LLevame de regreso" />
        </div>
        <div className="contendImages_error_404">
            <img src={images.bobesponja}
             className="filter_two"
            alt="bobcantando" />
        </div>
    </main>
)
}

export default Error404;