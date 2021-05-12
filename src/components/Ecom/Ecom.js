import React from "react";
import "./Ecom.css";
import productslist from '../../mockdata/products.json';
import { Link, useHistory } from "react-router-dom";

const Ecom = () => {
    console.log('printing products ', productslist);
    console.log('type'+typeof(productslist[1]));
    return (
        
        <div class="ecom">
            {productslist.map((product) => {
                return (
                    
                    <div className="homescreen__products">
                        <div className="product">
                        <img src={product.imageUrl} alt={product.name} />

                        <div className="product__info">
                            <p className="info__name">{product.name}</p>

                            <p className="info__description">{product.description.substring(0, 100)}...</p>

                            <p className="info__price">${product.price}</p>

                            <Link to={{pathname: `/ecom/${product.id}`, state: {id: product }}} className="info__button">
                            View
                            </Link>
                        </div>
                        </div>

                    </div>
                )
            })}</div>
    );
};

export default Ecom;

