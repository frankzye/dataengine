import {ReactElement} from "react";
import {NodeModel} from "@syncfusion/ej2-diagrams";
// @ts-ignore
const uuid = require('uuid/v1');

export interface CardInfo {
    name: string;
    description?: string;
    type: string;
    defaultOption?: any;
    icon?: () => ReactElement;
    render: (node: CardNode) => ReactElement;
    renderEditor: (node: CardNode) => ReactElement;
}

export class CardNode {
    name: string;
    cardInfoName: string;
    data?: any;
}

export const createDiagramNode = (cardInfo: CardInfo, option: any): NodeModel => {
    const id = "node" + uuid().replace(/-/g, "");
    return {
        id,
        width: 240,
        height: 120,
        data: {
            name: "test",
            cardInfoName: cardInfo.name,
        },
        ...option,
        shape: {type: "HTML", content: `<div data-id='${id}' class="cardInstanceWrapper"/>`},
    };
};
