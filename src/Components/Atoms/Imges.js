import { BACKEND } from "./backend";

const ImgReturn = ({id}) => {
    if(id){
        return(
        <img className="img_subMenu" 
        src={`${BACKEND}/image/photo/${id}`} 
        alt={id} />
    )
    }else{
        return null
    }

}

export default ImgReturn; 