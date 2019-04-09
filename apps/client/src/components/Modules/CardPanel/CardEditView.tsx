import * as React from "react";
import {DataComponentState} from "../../Entities/DataComponentState";
import {connect} from "react-redux";
import {CardInfo, CardNode} from "../../Entities/CardInfo";
import CardsProducerToolbar from "../CardsProducer/CardsProducerToolbar";
import {ServiceBus} from "../../Entities/ServiceBus";
import {NodeModel} from "@syncfusion/ej2-diagrams";

export interface CardEditViewProps {
    id: string;
    nodes?: NodeModel[];
}

export interface CardEditViewStates {
    node?: CardNode;
}

class CardEditView extends React.Component<CardEditViewProps, CardEditViewStates> {
    constructor(props: CardEditViewProps) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const {nodes, id} = this.props;
        let node;
        if (nodes && (node = nodes.find(n => n.id === id))) {
            this.setState({node: node.data as any});
        }
    }

    render() {
        const {node} = this.state;
        if (!node) {
            return null;
        }
        return <div>
            <CardsProducerToolbar node={node}/>
            {ServiceBus.getInstance().getCardInfo(node.cardInfoName).renderEditor(node)}
        </div>
    }
}

const mapStateToProps = (state: DataComponentState) => {
    console.log(state);
    return {
        nodes: state.nodes
    };
};
export default connect(mapStateToProps)(CardEditView);
