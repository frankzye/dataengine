import * as React from "react";
import {Dispatch} from "react";
import {CardInfo, CardNode, createDiagramNode} from "../../Entities/CardInfo";
import {Card} from "antd";
import {ConnectDragSource, DragSource, DragSourceConnector, DragSourceMonitor} from "react-dnd";
import ItemTypes from "../../Entities/ItemTypes";
import {ACTION_TYPE_ADD_NODE, DataComponentState} from "../../Entities/DataComponentState";
import {connect} from "react-redux";
import {NodeModel} from "@syncfusion/ej2-diagrams";

const styles = {
    margin: "5px"
};

export interface CardItemProps {
    path?: string;
    isDragging: boolean;
    connectDragSource: ConnectDragSource,
    cardInfo: CardInfo;
    addNode?: (instance: NodeModel) => void;
}

class CardItem extends React.PureComponent<CardItemProps> {
    render() {
        const {isDragging, connectDragSource} = this.props;
        const opacity = isDragging ? 0.4 : 1;
        return <div style={{...styles, opacity}} ref={connectDragSource}>
            <Card ref={connectDragSource as any}>{this.props.cardInfo.name}</Card>
        </div>
    }
}

const cardSource = {
    beginDrag(props: CardItemProps) {
        return {cardInfo: props.cardInfo, addNode: props.addNode};
    },

    endDrag(props: CardItemProps, monitor: DragSourceMonitor) {
        const result = monitor.getDropResult();
        if (result) {
            const cardInfo = props.cardInfo;
            const sourceOffset = document.querySelector("#diagram").getBoundingClientRect();
            const node = createDiagramNode(cardInfo, {
                offsetX: result.offset.x - sourceOffset.left,
                offsetY: result.offset.y - sourceOffset.top,
            });
            props.addNode(node);
            result.append(node)
        }
    },
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect: DragSourceConnector, monitor: DragSourceMonitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

const mapStateToProps = (state: DataComponentState) => ({
    path: state.path
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        addNode: (node: NodeModel) => dispatch({type: ACTION_TYPE_ADD_NODE, node})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DragSource(ItemTypes.CardItem, cardSource, collect)(CardItem));
