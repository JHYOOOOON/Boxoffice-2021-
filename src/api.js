import axios from "axios";

/*
    [ 필수 params ]
    - key
    - targetDt: 일일의 경우 전날, 주간/주말의 경우 저번주
    
    [ 선택 params ]
    - weekGb: "0": 주간, "1": 주말(금~일)(default), "2": 주중(월~목)
*/

const api = axios.create({
    baseURL: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice",
    params: {
        key: "c67b7686e20e227e8218f3c03689b249",
    },
});

/* GET targetDt (YYYYMMDD) */
const getDate = (isDaily) => {
    let nDate = new Date();
    let year, month, date;

    isDaily
        ? nDate.setDate(settingDate.getDate() - 1)
        : nDtae.setDate(settingDate.getDate() - 7);

    year = nDate.getFullYear();
    month = nDate.getMonth() + 1;
    date = nDate.getDate();

    return year + (month < 10)
        ? `0${month}`
        : month + (date < 10)
        ? `0${date}`
        : date;
};

const dailyApi = () => {
    api.get("/searchDailyBoxOfficeList.json", {
        params: {
            targetDt: getDate(true),
        },
    });
};

const weekApi = () => {
    api.get("/searchWeeklyBoxOfficeList.json", {
        params: {
            targetDt: getDate(false),
            weekGb: "0",
        },
    });
};

const weekendApi = () => {
    api.get("/searchWeeklyBoxOfficeList.json", {
        params: {
            targetDt: getDate(false),
        },
    });
};

export { dailyApi, weekApi, weekendApi };
