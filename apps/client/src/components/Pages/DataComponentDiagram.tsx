import * as React from 'react';
import {CardsView} from "../Modules/CardsView/CardsView";
import {CardsProducer} from "../Modules/CardsProducer/CardsProducer";
import {CardsProducerToolbar} from "../Modules/CardsProducer/CardsProducerToolbar";
import {createStore} from "redux";
import {Provider} from "react-redux"
import {diagramReducer} from "../Entities/DataComponentState";
import {ServiceBus} from "../Entities/ServiceBus";

interface DataComponentDiagramProps {

}

interface DataComponentDiagramStates {

}

export class DataComponentDiagram extends React.PureComponent<DataComponentDiagramProps, DataComponentDiagramStates> {
    constructor(props: DataComponentDiagramProps) {
        super(props);
    }

    render() {
        console.log(ServiceBus.getInstance().components.length);
        const store = createStore(diagramReducer, {});
        return <Provider store={store}>
            <CardsProducerToolbar/>
            <CardsView/>
            <CardsProducer/>
        </Provider>;
    }
}
