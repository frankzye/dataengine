import * as React from 'react';
import {DiagramComponent} from "@syncfusion/ej2-react-diagrams";

export class CardsProducer extends React.PureComponent<any, any> {
    render() {
        return <DiagramComponent id="diagram" width={"100%"} height={"350px"}/>;
    }
}
