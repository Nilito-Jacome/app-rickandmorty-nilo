import React from "react";


const Location = ({data}) => {

    return (
        <div className="location-card">
            <div className="location">
            <h3 className="Nombre"><span>Name: </span>{data.name}</h3>

            <h3 className="Tipo"><span>Type:</span>{data.type}</h3>

            <h3 className="Dimension"><span>Dimension:</span>{data.dimension}</h3>

            <h3 className="Residentes"><span>Residentes:</span>{data.residents?.length}</h3>

            <h3 className="Id"><span>Id:</span>{data.id}</h3>
            </div>
        </div>
    );
};

export default Location;








