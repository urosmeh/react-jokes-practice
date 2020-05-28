import React from "react";

function Product (props) {
    return (
        <div style={{border: "solid 1px"}}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>price: {props.price}</p>
        </div>
    )
}

export default Product;