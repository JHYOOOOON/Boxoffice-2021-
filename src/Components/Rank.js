import React from "react";

// 숫자 세자리마다 콤마 찍기
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 순위 증감분을 화살표로 변환
// -3 => ▼ 3
const convertRankInten = (rankInten) => {
    const n = rankInten * 1;

    if (n === 0) {
        return <span className="zero">-</span>;
    } else if (n > 0) {
        return (
            <>
                <span className="up">
                    <i class="fas fa-long-arrow-alt-up"></i>
                    <span>{n}</span>
                </span>
            </>
        );
    } else if (n < 0) {
        return (
            <>
                <span className="down">
                    <i class="fas fa-long-arrow-alt-down"></i>
                    {n * -1}
                </span>
            </>
        );
    }
};

const Rank = ({ rank, rankON, movieNm, audiAcc, rankInten }) => {
    return (
        <li>
            <div>
                <span className="rank">{rank}</span>
                <span className={`rankON ${rankON}`}>{rankON}</span>
            </div>
            <div>{convertRankInten(rankInten)}</div>
            <div>
                <p className="movieNm">{movieNm}</p>
                <p className="audiAcc">👀 {numberWithCommas(audiAcc)}</p>
            </div>
        </li>
    );
};

export default Rank;
