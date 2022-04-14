const ImgReturn = ({id}) => {
    if(id){
        return(
            <img className="img_subMenu" src={`http://localhost:5000/image/photo/${id}`} alt={id} />
    )
    }else{
        return null
    }

}

export default ImgReturn; 