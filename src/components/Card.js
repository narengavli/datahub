import React from 'react';

const Card = ({ item }) => {
    return (
        <>
            {item.map((Val) => {
                return (
                    <div className="card mb-3 me-3" style={{ width: "30rem" }} key={Val.id}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Brand : {Val.brand}</li>
                            <li className="list-group-item">Model : {Val.model}</li>
                            <li className="list-group-item">Price : {Val.price}</li>
                            <li className="list-group-item">Camera : {Val.camera}</li>
                            <li className="list-group-item">Battery : {Val.battery}</li>
                            <li className="list-group-item">Display Size : {Val.display_size}</li>
                            <li className="list-group-item">Resolution : {Val.resolution}</li>
                            <li className="list-group-item">Ram : {Val.RAM}</li>
                        </ul>
                    </div>
                );
            })}
        </>
    )
}

export default Card;