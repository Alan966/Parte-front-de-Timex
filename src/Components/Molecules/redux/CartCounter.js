import { connect } from 'react-redux'
const CartCounter = ({relojesTotales}) => {
    return (
        <div className="cart-counter">
            <span>{relojesTotales.length}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    relojesTotales: state.relojesTotales
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)