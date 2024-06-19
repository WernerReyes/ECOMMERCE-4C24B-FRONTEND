import React from "react";

function Hero({ categoryName }) {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>{categoryName}</h1>
                        </div>
                    </div>
                    <div className="col-lg-7"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
