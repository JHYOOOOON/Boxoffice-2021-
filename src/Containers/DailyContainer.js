import React from "react";
import Loader from "../Components/Loader";
import { dailyApi } from "../api";

/* 일일 박스오피스 */
class DailyContainer extends React.Component {
    state = {
        title: null,
        results: null,
        term: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const { data: boxOfficeResult } = await dailyApi();
            console.log(boxOfficeResult, ":::dailyResult");
            this.setState({
                title: boxOfficeResult.boxOfficeType,
                data: boxOfficeResult.dailyBoxOfficeList,
                term: boxOfficeResult.showRange,
            });
        } catch {
            this.setState({ error: "🚨 데이터를 찾을 수 없습니다" });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        return <>{this.state.loading ? <Loader /> : <div></div>}</>;
    }
}

export default DailyContainer;
