import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import {
    DailyContainer as Daily,
    WeekContainer as Week,
    WeekendContainer as Weekend,
} from "../Containers";

export default () => {
    return (
        <HashRouter>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact component={Daily} />
                    <Route path="/week" component={Week} />
                    <Route path="/weekend" exact component={Weekend} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </HashRouter>
    );
};
