import * as React from "react";

export interface PostgreSQLConnectorProps {
}

export interface PostgreSQLConnectorStates {
}

export class PostgreSQLConnector extends React.Component<PostgreSQLConnectorProps, PostgreSQLConnectorStates> {
    constructor(props: PostgreSQLConnectorProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>Connector</div>;
    }
}
