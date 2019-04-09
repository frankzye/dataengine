import {ConnectorModel, NodeModel} from "@syncfusion/ej2-diagrams";

export class DiagramInfo {
    id: string;
    name: string;
    usr: string;
    path: string;
    nodes: NodeModel[];
    connectors: ConnectorModel[];
}
