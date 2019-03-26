import * as React from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import {OverView} from "../Pages/OverView";
import {DataComponentDiagram} from "../Pages/DataComponentDiagram";
import {LayoutComponent} from "../Pages/LayoutComponent";
import {InsightDiagram} from "../Pages/InsightDiagram";

export class Routes extends React.PureComponent<any, any> {
    render() {
        return <HashRouter>
            <Switch>
                <Route exact key={"home"} path={"/"}>
                    <OverView/>
                </Route>
                <Route key={"data"} path={"/data"}>
                    <DataComponentDiagram/>
                </Route>
                <Route key={"layout"} path={"/layout"}>
                    <LayoutComponent/>
                </Route>
                <Route key={"insight"} path={"/insight"}>
                    <InsightDiagram/>
                </Route>
            </Switch>
        </HashRouter>
    }
}
