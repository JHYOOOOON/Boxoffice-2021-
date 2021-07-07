import React from "react";
import { weekendApi } from "../api";

/* 주말 박스오피스 */
class WeekendContainer extends React.Component {
    state = {
        title: null,
        data: null,
        term: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const { data: boxOfficeResult } = await weekendApi();
            console.log(boxOfficeResult, ":::weekendResult");
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
        return <div>Weekend</div>;
    }
}

export default WeekendContainer;
