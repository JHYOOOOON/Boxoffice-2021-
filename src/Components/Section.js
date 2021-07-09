import React from "react";

// YYYYMMDD => YYYY.MM.DD
const formatTerm = (term) => {
    let date =
        term.substr(0, 4) + "." + term.substr(4, 2) + "." + term.substr(6, 2);
    date += " ~ ";
    date +=
        term.substr(9, 4) + "." + term.substr(13, 2) + "." + term.substr(15);
    return date;
};

const Section = ({ title, term, children }) => {
    return (
        <section>
            <p className="title">{title}</p>
            <span className="term">📅 {formatTerm(term)}</span>
            <ul>{children}</ul>
        </section>
    );
};

export default Section;
