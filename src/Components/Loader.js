import React from "react";
import "../scss/Loader.css";

const Loader = () => {
    return (
        <section className="loader">
            <div class="load-wrapp">
                <div class="load-3">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </section>
    );
};

export default Loader;
