import * as React from 'react';
import {Input, Tabs} from "antd";
import {ServiceBus} from "../../Entities/ServiceBus";
import "./CardsView.less";
import CardItem from "../CardItem/CardItem";

const TabPane = Tabs.TabPane;

interface CardsViewState {
}

export class CardsView extends React.PureComponent<any, CardsViewState> {
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        const tabItems: any[] = [];
        const cardInstance = ServiceBus.getInstance();
        cardInstance.cardCollection.types.forEach(type => {
            tabItems.push(<TabPane tab="连接器" key={type}>
                <div className={"cardsViewContainer"}>
                    {cardInstance.cardCollection.getCardsByType(type).map(c => (
                        <CardItem cardInfo={c} key={c.name}/>
                    ))}
                </div>
            </TabPane>);
        });
        return <Tabs defaultActiveKey="连接器" tabBarExtraContent={<Input placeholder="search"/>}>
            {tabItems}
        </Tabs>;
    }
}
