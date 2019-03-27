import * as React from 'react';
import {DiagramComponent, SnapConstraints, SnapSettingsModel, NodeModel, NodeConstraints} from "@syncfusion/ej2-react-diagrams";
import {DropTarget} from "react-dnd";
import ItemTypes from "../../Entities/ItemTypes";
import {ConnectDropTarget, DropTargetConnector, DropTargetMonitor} from "react-dnd/lib/esm";
import {connect} from "react-redux";
import {DataComponentState} from "../../Entities/DataComponentState";
import {CardConnector, CardInstance} from "../../Entities/CardInfo";

export interface CardsProducerProps {
    canDrop: boolean,
    isOver: boolean,
    connectDropTarget: ConnectDropTarget,
    nodes: CardInstance[],
    connectors: CardConnector[]
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

    static nodeDefaultSettings(node: NodeModel){
        //TODO: set node
    }

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
                              getNodeDefaults={CardsProducer.nodeDefaultSettings}
                              connectors={connectors}/>
        </div>;
    }
}

const target = DropTarget(
    ItemTypes.CardItem,
    {
        drop: (props, monitor, component) => {
            return {
                offset: monitor.getSourceClientOffset(),
                diagram: component.diagramInstance
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
    connectors: state.cardConnectors,
    nodes: state.cardInstances
});
export default connect(mapStateToProps)(target);
