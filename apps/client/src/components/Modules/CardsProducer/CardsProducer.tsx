import * as React from 'react';
import {
    ConnectorModel,
    DiagramComponent,
    NodeModel,
    SnapConstraints,
    SnapSettingsModel
} from "@syncfusion/ej2-react-diagrams";
import {DropTarget} from "react-dnd";
import ItemTypes from "../../Entities/ItemTypes";
import {ConnectDropTarget, DropTargetConnector, DropTargetMonitor} from "react-dnd/lib/esm";
import {connect} from "react-redux";
import {DataComponentState} from "../../Entities/DataComponentState";
import {CardNode} from "../../Entities/CardInfo";
import * as ReactDOM from "react-dom";
import {CardPanel} from "../CardPanel/CardPanel";

export interface CardsProducerProps {
    canDrop: boolean,
    isOver: boolean,
    connectDropTarget: ConnectDropTarget,
    nodes: NodeModel[],
    path: string;
    connectors: ConnectorModel[]
}

const styles: React.CSSProperties = {
    flex: 1,
    border: "1px solid #ccc",
    margin: "0px 5px 5px 5px"
};

class CardsProducer extends React.PureComponent<CardsProducerProps, any> {
    diagramInstance: DiagramComponent;

    snapSettings: SnapSettingsModel = {
        constraints: SnapConstraints.None
    };

    render() {
        const {connectDropTarget, canDrop, isOver, connectors, nodes} = this.props;
        const isActive = canDrop && isOver;
        let backgroundColor = '#fff';
        if (isActive || canDrop) {
            backgroundColor = '#ccc';
        }
        return <div ref={connectDropTarget} style={{...styles, backgroundColor}}>
            <DiagramComponent id="diagram" ref={diagram => (this.diagramInstance = diagram)} width={"100%"}
                              height={"100%"} snapSettings={this.snapSettings} nodes={nodes}
                              created={this.onCreated.bind(this)}
                              connectors={connectors}/>
        </div>;
    }

    append(node: NodeModel) {
        this.diagramInstance.add(node);
        this.renderNode(node);
    }

    renderNode(node: NodeModel) {
        const cardNode = node.data as CardNode;
        ReactDOM.render(<CardPanel node={cardNode} id={node.id}
                                   path={this.props.path}/>, document.querySelector(`[data-id='${node.id}']`));
    }

    onCreated() {
        for (const node of this.diagramInstance.nodes) {
            this.renderNode(node);
        }
    }
}

const target = DropTarget(
    ItemTypes.CardItem,
    {
        drop: (props, monitor, component) => {
            return {
                offset: monitor.getSourceClientOffset(),
                append: (node: NodeModel) => {
                    component.append(node);
                }
            };
        }
    },
    (connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(CardsProducer);

const mapStateToProps = (state: DataComponentState) => ({
    connectors: state.connectors,
    nodes: state.nodes,
    path: state.path
});
export default connect(mapStateToProps)(target);

