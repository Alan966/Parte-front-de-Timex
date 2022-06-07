import { useState, useEffect } from "react";
import { get } from "axios";
const useAxios = (url) => {

    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(() => {
        get(url)
        .then(res => {
            setData(res.data);

        })
        .catch(err => {
            setError(err)
        })
    },[url])

    return[data, error]
}

export default useAxios;