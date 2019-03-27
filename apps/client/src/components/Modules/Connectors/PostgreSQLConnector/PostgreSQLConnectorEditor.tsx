import * as React from "react";

export interface PostgreSQLConnectorEditorProps {
}

export interface PostgreSQLConnectorEditorStates {
}

export class PostgreSQLConnectorEditor extends React.Component<PostgreSQLConnectorEditorProps, PostgreSQLConnectorEditorStates> {
    constructor(props: PostgreSQLConnectorEditorProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>Editor</div>;
    }
}
