import React from "react";

const Section = ({ title, term, children }) => {
    return (
        <section>
            <p>{title}</p>
            <span>{term}</span>
            <div>{children}</div>
        </section>
    );
};

export default Section;
