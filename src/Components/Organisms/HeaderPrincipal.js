import Ulcontend from "../Molecules/Ulcontend";

const HeaderPrincipal = () => {
    return(
        <div className="header_principal">
            <div className="contend_one">
                <h1>TIMEX</h1>
            </div>
            <header className="header">
                <nav className="nav">
                <Ulcontend
                  _id={1}
                  contraseña={0o1}
                  url={`http://localhost:5000/submenu/one/all`}
                  children={
                  <Ulcontend 
                  url={`http://localhost:5000/submenu/two/all`}
                  _id={2}
                  contraseña={0o2}
                  children={
                    <Ulcontend 
                    url={`http://localhost:5000/submenu/three/all`}
                    _id={3}
                    contraseña={0o3}
                    />
                  }
                  img={`http://localhost:5000/image/imageAll`}
                  />
                }
                />
                </nav>
            </header>
        </div>
    )
}
export default HeaderPrincipal;