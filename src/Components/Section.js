import React from "react";

const Section = ({ title, term, children }) => {
    return (
        <section>
            <p className="title">{title}</p>
            <span className="term">{term}</span>
            <ul>{children}</ul>
        </section>
    );
};

export default Section;
