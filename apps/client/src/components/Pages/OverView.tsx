import * as React from 'react';
import {Dropdown, Icon, Layout, Menu, Tabs} from "antd";
import {SmallHeader} from "../Modules/SmallHeader/SmallHeader";

const TabPane = Tabs.TabPane;

export class OverView extends React.PureComponent<any, any> {
    render() {
        return <Layout>
            <SmallHeader/>
            <Layout>
                <Tabs defaultActiveKey="1" tabBarExtraContent={OverView.getAddControls()}>
                    <TabPane tab="数据组件" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="布局" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="视图" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </Layout>
        </Layout>;
    }

    static getAddControls(): React.ReactNode {
        const menu = (
            <Menu>
                <Menu.Item key="0"><a href="#/data">创建组件</a></Menu.Item>
                <Menu.Item key="1"><a href="#/layout">创建布局</a></Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="3"><a href="#/insight">创建视图</a></Menu.Item>
            </Menu>
        );
        return <Dropdown overlay={menu} trigger={['click']}><Icon type={"plus"}/></Dropdown>
    }
}
