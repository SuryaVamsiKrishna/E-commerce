import "./Product.css";
import React from "react";
import Navbar from "./Navbar";

const Product = (props) => {
    
    const product = props.location.state.id;
    console.log('product'+ props.location.state.id);
    console.log('product', product);

    return( 
            
            <div className="productscreen">
            {/* <Navbar/> */}
                        <div className="productscreen__left">
                            <div className="left__image">
                                <img src={product.imageUrl} alt={product.name}  className="images" style={{height: "420px", width: "315px", marginLeft: "40px"}}/>
                            </div>
                            <div className="left__info">
                                <p className="left__name">{product.name}</p>
                                <p>Price: ${product.price}</p>
                                <p>Description: <br></br>{product.description}</p>
                            </div>
                        </div>
                        <div className="productscreen__right">
                            <div className="right__info">
                                <p>
                                    Price:
                        <span>${product.price}</span>
                                </p>
                                <p>
                                    Status:
                        <span>
                                        In Stock
                                    </span>
                                </p>

                                <p>
                                    <button type="button">
                                        Add To Cart
                                    </button>
                                </p>
                            </div>
                        </div>
            </div>
    
        );
};

export default Product;
