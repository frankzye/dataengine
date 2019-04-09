import * as React from 'react';
import {ReactNode} from 'react';
import {CardsView} from "../Modules/CardsView/CardsView";
import CardsProducer from "../Modules/CardsProducer/CardsProducer";
import CardsProducerToolbar from "../Modules/CardsProducer/CardsProducerToolbar";
import {createStore} from "redux";
import {Provider} from "react-redux"
import {diagramReducer} from "../Entities/DataComponentState";
import {DragDropContext} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend'
import {Route, Switch} from "react-router";
import CardEditView from "../Modules/CardPanel/CardEditView";
import {DiagramInfo} from "../Entities/DiagramInfo";
import {Spin} from "antd";

interface DataComponentDiagramProps {
    name: string;
    usr: string;
}

interface DataComponentDiagramStates {
    diagram?: DiagramInfo;
}

class DataComponentDiagram extends React.PureComponent<DataComponentDiagramProps, DataComponentDiagramStates> {
    constructor(props: DataComponentDiagramProps) {
        super(props);
        this.state = {};
    }

    async componentWillMount() {
        const diagram = await (await fetch(`/api/1.0/diagrams/${this.props.usr}/${this.props.name}`)).json();
        this.setState({diagram});
    }

    render(): ReactNode {
        const {diagram} = this.state;
        if (!diagram) {
            return <Spin spinning={true}/>;
        }
        const store = createStore(diagramReducer, {
            ...diagram
        });
        return <Provider store={store}>
            <Switch>
                <Route exact key={"view"} path={`/diagrams/:usr/:name/:nodeId`}
                       render={(props) => <CardEditView id={props.match.params.nodeId}/>}/>
                <Route key={"card"} path={`/diagrams/:usr/:name`}>
                    <CardsProducerToolbar/>
                    <CardsView/>
                    <CardsProducer/>
                </Route>
            </Switch>
        </Provider>;
    }
}

export default DragDropContext(HTML5Backend)(DataComponentDiagram)
