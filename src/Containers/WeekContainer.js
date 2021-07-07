import React from "react";
import { weekApi } from "../api";

/* 주간 박스오피스 */
class WeekContainer extends React.Component {
    state = {
        title: null,
        data: null,
        term: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const { data: boxOfficeResult } = await weekApi();
            console.log(boxOfficeResult, ":::weekResult");
            this.setState({
                title: boxOfficeResult.boxOfficeType,
                data: boxOfficeResult.weeklyBoxOfficeList,
                term: boxOfficeResult.showRange,
            });
        } catch {
            this.setState({ error: "🚨 데이터를 찾을 수 없습니다" });
        } finally {
            this.setState({ loading: false });
        }
    }
    render() {
        return <div>Week</div>;
    }
}

export default WeekContainer;
