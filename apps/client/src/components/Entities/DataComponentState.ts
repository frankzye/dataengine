import {DiagramInfo} from "./DiagramInfo";
import {NodeModel} from "@syncfusion/ej2-diagrams";

export const ACTION_TYPE_ADD_NODE = "ACTION_TYPE_ADD_NODE";

export class DataComponentState extends DiagramInfo{
}

function createNode(state: DataComponentState, node: NodeModel) {
    state.nodes.push(node);
}

export const diagramReducer = (state: DataComponentState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE_ADD_NODE:
            createNode(state, action.node);
            break;
        default:
            break;
    }
    sessionStorage.setItem(state.id, JSON.stringify(state));
    return state;
};


