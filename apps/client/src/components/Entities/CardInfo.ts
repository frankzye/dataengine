import {ConnectorModel} from "@syncfusion/ej2-diagrams";
import {NodeModel} from "@syncfusion/ej2-react-diagrams";
import {ReactElement} from "react";
// @ts-ignore
const uuid = require('uuid/v1');

export interface CardInfo {
    name: string;
    description?: string;
    type: string;
    defaultOption?: any;
    icon?: () => ReactElement;
    render: () => ReactElement;
    renderEditor: () => ReactElement;
}

export interface CardConnector extends ConnectorModel {
    direction: "in" | "out";
    from: CardInstance;
    to: CardInstance;
}

export class CardInstance implements NodeModel {
    id: string;
    name: string;
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
    shape?: any;
    annotations?: any;
    connectors?: CardConnector[];
    state: any;
    cardInfo: CardInfo;

    static Create(cardInfo: CardInfo, option: any) {
        const id = uuid();
        return Object.assign(new CardInstance(), {
            id,
            name: "test",
            width: 240,
            height: 120,
            cardInfo,
            ...option,
            ...cardInfo.defaultOption,
            shape: {type: "HTML", content: `<div data-id='${id}' class="cardInstanceWrapper"/>`},
        });
    }
}
