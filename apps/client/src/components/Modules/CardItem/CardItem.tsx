import * as React from "react";
import {Dispatch} from "react";
import * as ReactDOM from "react-dom";
import {CardInfo, CardInstance} from "../../Entities/CardInfo";
import {Card} from "antd";
import {ConnectDragSource, DragSource, DragSourceConnector, DragSourceMonitor} from "react-dnd";
import ItemTypes from "../../Entities/ItemTypes";
import {ACTION_TYPE_ADD_NODE} from "../../Entities/DataComponentState";
import {connect} from "react-redux";
import {CardPanel} from "../CardPanel/CardPanel";

const styles = {
    margin: "5px"
};

interface CardItemProps {
    isDragging: boolean;
    connectDragSource: ConnectDragSource,
    cardInfo: CardInfo;
    addNode?: (instance: CardInstance) => void;
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
            const instance = CardInstance.Create(cardInfo, {
                offsetX: result.offset.x - sourceOffset.left,
                offsetY: result.offset.y - sourceOffset.top,
            });
            props.addNode(instance);
            result.diagram.add(instance);
            ReactDOM.render(<CardPanel cardInstance={instance}/>, document.querySelector(`[data-id='${instance.id}']`));
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        addNode: (instance: CardInstance) => dispatch({type: ACTION_TYPE_ADD_NODE, instance})
    }
};
export default connect(() => ({aa: "bb"}), mapDispatchToProps)(DragSource(ItemTypes.CardItem, cardSource, collect)(CardItem));
