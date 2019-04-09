import * as React from "react";
import {CardNode} from "../../../Entities/CardInfo";
import {Card, Form, Input} from "antd";

interface ConnectionInfo {
    server: string;
    port: number;
    database: string;
    username: string;
    password: string;
    schema: string;
}

export interface PostgreSQLConnectorEditorProps {
    node: CardNode;
}

export interface PostgreSQLConnectorEditorStates {
    connectionInfo: ConnectionInfo;
}

export class PostgreSQLConnectorEditor extends React.PureComponent<PostgreSQLConnectorEditorProps, PostgreSQLConnectorEditorStates> {
    constructor(props: PostgreSQLConnectorEditorProps) {
        super(props);
        if (!props.node.data) {
            props.node.data = {
                connectionInfo: {} as any
            };
        }
        this.state = {connectionInfo: props.node.data.connectionInfo};
    }

    render() {
        const {connectionInfo} = this.state;
        const FormComponent = Form.create()((props) => {
            const {getFieldDecorator} = props.form;
            return <Form className={"request-form"}>
                <Form.Item>
                    {getFieldDecorator(`server`, {
                        initialValue: connectionInfo.server,
                        rules: [{
                            required: true,
                            message: 'input server!',
                        }],
                    })(
                        <Input/>
                    )}
                </Form.Item>
            </Form>;
        });
        return <div>
            <div>
                <Card>
                    <FormComponent/>
                </Card>
                <div>

                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>;
    }
}
