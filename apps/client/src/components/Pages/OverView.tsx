import * as React from 'react';
import {Dropdown, Icon, Layout, List, Menu, Tabs} from "antd";
import {DiagramInfo} from "../Entities/DiagramInfo";

const TabPane = Tabs.TabPane;

interface OverViewProps {
}

interface OverViewStates {
    diagrams?: DiagramInfo[];
}

export class OverView extends React.PureComponent<OverViewProps, OverViewStates> {
    constructor(props: OverViewProps) {
        super(props);
        this.state = {diagrams: []};
    }

    async componentWillMount() {
        const diagrams = await (await fetch("/api/1.0/diagrams/frank")).json();
        this.setState({diagrams})
    }

    render() {
        const {diagrams} = this.state;
        return <Layout>
            <Layout>
                <Tabs defaultActiveKey="1" tabBarExtraContent={OverView.getAddControls()}>
                    <TabPane tab="数据组件" key="1">
                        <List dataSource={diagrams} renderItem={(d: DiagramInfo) =>
                            <a href={`#/diagrams/frank/${d.name}`}><List.Item>{d.name}</List.Item></a>
                        }/>
                    </TabPane>
                </Tabs>
            </Layout>
        </Layout>;
    }

    static getAddControls(): React.ReactNode {
        const menu = (
            <Menu>
                <Menu.Item key="0"><a href="#/data">创建组件</a></Menu.Item>
            </Menu>
        );
        return <Dropdown overlay={menu} trigger={['click']}><Icon type={"plus"}/></Dropdown>
    }
}
