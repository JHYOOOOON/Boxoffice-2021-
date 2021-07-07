import axios from "axios";

/*
    [ 필수 params ]
    - key
    - targetDt: 일일의 경우 전날, 주간/주말의 경우 저번주
    
    [ 선택 params ]
    - weekGb: "0": 주간, "1": 주말(금~일)(default), "2": 주중(월~목)
*/

// [ ISSUE ] key를 여기다 넣었을 때 안 됨
const api = axios.create({
    baseURL: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice",
});

/* GET targetDt (YYYYMMDD) */
const getDate = (isDaily) => {
    let nDate = new Date();
    let year, month, date;

    isDaily
        ? nDate.setDate(nDate.getDate() - 1)
        : nDate.setDate(nDate.getDate() - 7);

    year = nDate.getFullYear();
    month = nDate.getMonth() + 1;
    date = nDate.getDate();

    let fullDate = `${year}`;
    fullDate += month < 10 ? `0${month}` : month;
    fullDate += date < 10 ? `0${date}` : date;

    return fullDate;
};

export const dailyApi = () => {
    return api.get("/searchDailyBoxOfficeList.json", {
        params: {
            key: "c67b7686e20e227e8218f3c03689b249",
            targetDt: getDate(true),
        },
    });
};

export const weekApi = () => {
    return api.get("/searchWeeklyBoxOfficeList.json", {
        params: {
            key: "c67b7686e20e227e8218f3c03689b249",
            targetDt: getDate(false),
            weekGb: "0",
        },
    });
};

export const weekendApi = () => {
    return api.get("/searchWeeklyBoxOfficeList.json", {
        params: {
            key: "c67b7686e20e227e8218f3c03689b249",
            targetDt: getDate(false),
        },
    });
};
