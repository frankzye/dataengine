import * as React from 'react';
import {ReactNode} from 'react';
import {CardsView} from "../Modules/CardsView/CardsView";
import CardsProducer from "../Modules/CardsProducer/CardsProducer";
import {CardsProducerToolbar} from "../Modules/CardsProducer/CardsProducerToolbar";
import {createStore} from "redux";
import {Provider} from "react-redux"
import {diagramReducer} from "../Entities/DataComponentState";
import {DragDropContext} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend'
import {Route, Switch} from "react-router";

interface DataComponentDiagramProps {
}

interface DataComponentDiagramStates {

}

class DataComponentDiagram extends React.PureComponent<any, DataComponentDiagramStates> {

    constructor(props: DataComponentDiagramProps) {
        super(props);
    }

    render(): ReactNode {
        const store = createStore(diagramReducer, {
            cardInstances: [],
            cardConnectors: []
        });
        return <Provider store={store}>
            <CardsProducerToolbar/>
            <Switch>
                <Route exact key={"card"} path={`/data`}>
                    <CardsView/>
                    <CardsProducer/>
                </Route>
                <Route exact key={"view"} path={`/data/:nodeId`}>
                    <div>ItemView</div>
                </Route>
            </Switch>
        </Provider>;
    }
}

export default DragDropContext(HTML5Backend)(DataComponentDiagram)
