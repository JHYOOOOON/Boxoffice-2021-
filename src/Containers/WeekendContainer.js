import React from "react";
import Section from "../Components/Section";
import Rank from "../Components/Rank";
import Loader from "../Components/Loader";
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
            const {
                data: { boxOfficeResult: boxOfficeResult },
            } = await weekendApi();
            console.log(boxOfficeResult, ":::weekendResult");
            this.setState({
                title: boxOfficeResult.boxofficeType,
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
        return (
            <>
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <Section title={this.state.title} term={this.state.term}>
                        {this.state.data && this.state.data.length > 0 && (
                            <>
                                {this.state.data.map((movie, i) => {
                                    return (
                                        <Rank
                                            key={i}
                                            rank={movie.rank}
                                            rankON={movie.rankOldAndNew}
                                            movieNm={movie.movieNm}
                                            audiAcc={movie.audiAcc}
                                            rankInten={movie.rankInten}
                                        />
                                    );
                                })}
                            </>
                        )}
                        {this.state.error && <div>this.state.error</div>}
                    </Section>
                )}
            </>
        );
    }
}

export default WeekendContainer;
