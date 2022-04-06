const ImgReturn = ({data}) => {
    console.log(data)
    return(
            <img className="img_subMenu" src={`http://localhost:5000/image/photo/${data.idImg}`} alt={data.submenuName} />
    )
}

export default ImgReturn; 