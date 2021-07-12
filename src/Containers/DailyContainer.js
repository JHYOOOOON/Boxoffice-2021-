import React from "react";
import Loader from "../Components/Loader";
import Section from "../Components/Section";
import Rank from "../Components/Rank";
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
            const {
                data: { boxOfficeResult },
            } = await dailyApi();
            // console.log(boxOfficeResult, ":::dailyResult");
            this.setState({
                title: boxOfficeResult.boxofficeType,
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
        const splitData = () => {
            const aData = this.state.data.slice(0, 5);
            const bData = this.state.data.slice(5);
            return (
                <>
                    <div className="aData">
                        {aData.map((movie, i) => {
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
                    </div>
                    <div className="bData">
                        {bData.map((movie, i) => {
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
                    </div>
                </>
            );
        };
        return (
            <>
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <Section title={this.state.title} term={this.state.term}>
                        {this.state.error ? (
                            <span className="error">
                                {this.state.error && (
                                    <div>{this.state.error}</div>
                                )}
                            </span>
                        ) : (
                            <>
                                {this.state.data &&
                                    this.state.data.length > 0 &&
                                    splitData()}
                            </>
                        )}
                    </Section>
                )}
            </>
        );
    }
}

export default DailyContainer;
