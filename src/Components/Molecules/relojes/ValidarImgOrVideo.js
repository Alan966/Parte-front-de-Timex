import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import useAxios from "../../Atoms/getAxios";

const ValidarImgOrVideo = ({id, description}) => {

    const [video, setVideo] = useState(null);

    const [data, error] = useAxios(`http://localhost:5000/relojestotalroute/photo/${id}`)

    useEffect(() => {
        setVideo(data, error)
    },[data, error])

const desarollarVideo = (id) => {
    console.log('Aqui va la logica ')
}

    return(
        <div key={id}>
            <h2>{description}</h2>
            {
                video ? 
                desarollarVIdeo(video)
                : 
                null
            }
        </div>)
}
export default ValidarImgOrVideo;