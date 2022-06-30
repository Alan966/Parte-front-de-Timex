import "../../ComponentsCss/Organims/ContendRelojes.css";

const ContendRelojesHome = ({children}) => {

return(
    <div className="contenedor_Slice">
        <h2 className="title_center"> WE THINK YOU'LL LIKE</h2>
        {
            children
        }
    </div>
)
}

export default ContendRelojesHome;