import * as React from "react";
import {CardNode} from "../../Entities/CardInfo";
import {Dropdown, Icon, Menu} from "antd";
import "./CardPanel.less";
import {ServiceBus} from "../../Entities/ServiceBus";

export interface CardPanelProps {
    id: string;
    node: CardNode;
    path: string;
}

export interface CardPanelStates {
    menuVisible: boolean;
}

export class CardPanel extends React.Component<CardPanelProps, CardPanelStates> {
    constructor(props: CardPanelProps) {
        super(props);
        this.state = {menuVisible: false};
    }

    render() {
        const {menuVisible} = this.state;
        const {node, path, id} = this.props;
        const menu = (
            <Menu>
                <Menu.Item key="1"><a href={`#${path}/${id}`}>View</a></Menu.Item>
                <Menu.Item key="2"><a href={`#${path}/${id}`}>Edit</a></Menu.Item>
            </Menu>
        );
        return <div className={"cardInstance"}>
            <div className="toolbar" onClick={() => {
                this.setState({menuVisible: !menuVisible});
            }}>
                <Dropdown trigger={['click']} overlay={menu} visible={menuVisible}>
                    <a>{node.name}<Icon type={"caret-down"}/></a>
                </Dropdown>
            </div>
            {ServiceBus.getInstance().getCardInfo(node.cardInfoName).render(node)}
        </div>;
    }
}
