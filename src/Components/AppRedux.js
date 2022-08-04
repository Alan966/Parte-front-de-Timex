import { Provider } from "react-redux"
import store from "./Redux/Store"
import App from "./App"
const AppRedux = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}
export default AppRedux;