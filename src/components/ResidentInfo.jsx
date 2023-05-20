
import { useState, useEffect } from "react";
import axios from "axios";

const ResidentInfo = ({url}) => {

    const [detail, setdetail] = useState ( { })

    useEffect (() => {
        axios
            .get(url)
            .then(resp => setdetail(resp.data))
            .catch( error => console.error(error));

    }, [])

    return (
        <div className="Container">
            <ul>
                    <li className="CardResident" >
                    <h4><span>Nombre: </span>{detail.name} </h4>
                    <img src={detail.image} />
                    <h4><span>Status: </span>{detail.status} </h4>
                    <h4><span>Location: </span>{ detail.location?.name} </h4>
                    <h4><span>Episode: </span>{ detail.episode?.length} </h4>
    
                    </li>
            </ul>
        </div>
    );
};

export default ResidentInfo;








