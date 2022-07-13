import { Outlet, Route, Router } from "react-router-dom";
import useAxios from "../Atoms/getAxios";
import NewShopAllNewArrivalsTwo from "../Pages/Relojes/NewShopAllNewArrivalsTwo";
const WatchesRoutes = ({
relojes
}) => {

    const [data,error ] = useAxios(relojes);

    console.log(data)

    return(
        <Router>
            {
                data ? 
                data.map(item => {
                    return(
                        <Route path={item.name} 
                        element={<NewShopAllNewArrivalsTwo 
                            direccion={"/WATCHES/BEST SELLERS"}
                            relojes={'http://localhost:5000/relojestotalroute/all'}
                            name={'TRENDING'}
                        />}
                        />
                    )
                })
                : 
                null
            }
        </Router>
    )
}

export default WatchesRoutes;