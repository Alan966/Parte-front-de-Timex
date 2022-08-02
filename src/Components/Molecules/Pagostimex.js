import FormularioEmail from "../Atoms/Formularioemail";
import "../../ComponentsCss/Moleculas/PagosTimex.css";
const Pagostimex = () => {
    return(
    <div className="contend_email_pagar">
        <div className="contend_formulario">
            {
                <FormularioEmail 
                name={"BE THE FIRST TO KNOW & RECEIVE 15% OFF AN ORDER"} 
                description={"By submitting your email address below you are agreeing to the Privacy Policy and Terms & Conditions."}
                />
            }
        </div>
        <div className="stay_connected">
            <h3 className="title_stay_connected">STAY CONNECTED</h3>
            <div className="contend_logos">
                <div className="contend_facebook"></div>
                <div className="contend_twitter"></div>
                <div className="contend_pinteres"></div>
                <div className="contend_instagram"></div>
                <div className="contend_youtube"></div>
            </div>
            <p className="description_parrafo">
            Timex is committed to maintaining the highest accessibility
            standards in accordance with The Web Content Accessibility
            Guidelines (WCAG). Click for more details.
            </p>
        </div>
        <div className="contend_three">
            <h3> <div className="contend_mexico"></div> Mexico (MXN)</h3>
            <p>Privacy / Security | Terms of Use | Corporate Site</p>
            <p>© Timex. All rights reserved.</p>
        </div>
        <div className="contend_logos_tarjetas">
                <div className="visa_card"></div>
                <div className="americanexpress"></div>
                <div className="discover"></div>
                <div className="jcb"></div>
                <div className="maestro"></div>
                <div className="mastercard"></div>
                <div className="pay"></div>
                <div className="paypal"></div>
        </div>
    </div>
    )
}

export default Pagostimex;