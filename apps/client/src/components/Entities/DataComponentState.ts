import {CardConnector, CardInstance} from "./CardInfo";

export const ACTION_TYPE_ADD_NODE = "ACTION_TYPE_ADD_NODE";

export class DataComponentState {
    cardInstances: CardInstance[];
    cardConnectors: CardConnector[];
}

function createNode(state: DataComponentState, node: CardInstance) {
    state.cardInstances.push(node);
}

export const diagramReducer = (state: DataComponentState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE_ADD_NODE:
            createNode(state, action.instance);
            break;
        default:
            break;
    }
    return state;
};


