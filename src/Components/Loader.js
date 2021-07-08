import React from "react";
import "../scss/Loader.css";

const Loader = () => {
    return (
        <section className="loader">
            <div className="load-wrapp">
                <div className="load-3">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    );
};

export default Loader;
