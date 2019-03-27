import {ServiceBus} from "./Components/Entities/ServiceBus";
import {PostgreSQLConnector} from "./Components/Modules/Connectors/PostgreSQLConnector/PostgreSQLConnector";
import {PostgreSQLConnectorEditor} from "./Components/Modules/Connectors/PostgreSQLConnector/PostgreSQLConnectorEditor";
import * as React from "react";

ServiceBus.getInstance().register({
    name: "PostgreSQL连接",
    type: "连接器",
    render: () => (<PostgreSQLConnector/>),
    renderEditor: () => (<PostgreSQLConnectorEditor/>)
});

ServiceBus.getInstance().register({
    name: "SQL Server连接",
    type: "连接器",
    render: () => (<PostgreSQLConnector/>),
    renderEditor: () => (<PostgreSQLConnectorEditor/>)
});
