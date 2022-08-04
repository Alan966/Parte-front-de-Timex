import { useRef , useState} from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "../../../ComponentsCss/Organims/Redux/ButtonRedux.css";

const ButtonRedux = ({info, addReloj, removeReloj}) =>{

    const [state, setState] = useState(`ADD TO BAG`)

    const ref = useRef()
    const retTwo = useRef()

    const cambiarInfo = (info) => {
        if(state === 'ADD TO BAG'){
            setState(`REMOVE FROM BAG`)
            addReloj(info)
        }else if(state === 'REMOVE FROM BAG'){
            setState(`ADD TO BAG`)
            removeReloj(info)
        }
        }


    return (
        <section>
            <div ref={ref} className="contend_contend_button" onClick={() => cambiarInfo(info)}>
                <div className="contendButton">
                    <Link className="ShopNow card Large" 
                    to="#" ref={retTwo}>
                        {
                            state
                        }
                    </Link> 
                </div>
           </div>
        </section>
    )
}

const mapStateToProps = state => ({
    relojesTotales: state.relojesTotales
})

const mapDispatchToProps = dispatch => ({
    addReloj(info){
        dispatch({
            type: 'ADD_RELOJ',
            id: info
        })
    }, 
    removeReloj(info){
        dispatch({
            type: 'REMOVE_RELOJ',
            id: info
        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRedux)