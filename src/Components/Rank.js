import React from "react";

const Rank = ({ key, rank, rankON, movieNm, audiAcc }) => {
    console.log(key, rank);
    return (
        <li key={key}>
            <div>
                <span className="rank">{rank}</span>
                <span className="rankON">{rankON}</span>
            </div>
            <div>
                <p className="movieNm">{movieNm}</p>
                <p className="audiAcc">누적관객수 {audiAcc}명</p>
            </div>
        </li>
    );
};

export default Rank;
