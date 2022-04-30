import FormularioEmail from "../Atoms/Formularioemail";

const Pagostimex = () => {
    return(
        <div>
            <div>
            {
                <FormularioEmail 
                name={"BE THE FIRST TO KNOW & RECEIVE 15% OFF AN ORDER"} 
                type={"email"}
                description={"By submitting your email address below you are agreeing to the Privacy Policy and Terms & Conditions."}
                />
            }
        </div>
        <div>
            <h3>STAY CONNECTED</h3>
            <div>
                <div className="contend_facebook"></div>
                <div className="contend_twitter"></div>
                <div className="contend_pinteres"></div>
                <div className="contend_instagram"></div>
                <div className="contend_youtube"></div>
            </div>
        </div>
        </div>
    )
}

export default Pagostimex;