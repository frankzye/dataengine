import * as React from 'react';
import {Card, Input, Tabs} from "antd";

const TabPane = Tabs.TabPane;

export class CardsView extends React.PureComponent<any, any> {
    render() {
        return <Tabs defaultActiveKey="1" tabBarExtraContent={<Input placeholder="search"/>}>
            <TabPane tab="连接器" key="1">
                <Card>
                    连接1
                </Card>
                <Card>
                    连接2
                </Card>
            </TabPane>
        </Tabs>;
    }
}
