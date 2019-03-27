import * as React from "react";
import {CardInstance} from "../../Entities/CardInfo";
import {Dropdown, Icon, Menu} from "antd";
import "./CardPanel.less";

export interface CardPanelProps {
    cardInstance: CardInstance;
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
        const {cardInstance} = this.props;
        const menu = (
            <Menu>
                <Menu.Item key="1"><a href={`#/data/${cardInstance.id}`}>View</a></Menu.Item>
                <Menu.Item key="2"><a href={`#/data/${cardInstance.id}`}>Edit</a></Menu.Item>
            </Menu>
        );
        return <div className={"cardInstance"}>
            <div className="toolbar" onClick={() => {
                this.setState({menuVisible: !menuVisible});
            }}>
                <Dropdown trigger={['click']} overlay={menu} visible={menuVisible}>
                    <a>{cardInstance.name}<Icon type={"caret-down"}/></a>
                </Dropdown>
            </div>
            {cardInstance.cardInfo.render()}
        </div>;
    }
}
