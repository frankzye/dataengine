import * as React from 'react';
import {Button, Icon} from "antd";
import {connect} from "react-redux";
import {DataComponentState} from "../../Entities/DataComponentState";
import {CardNode} from "../../Entities/CardInfo";
import "./CardsProducerToolbar.less";

interface CardsProducerToolbarProps {
    dataState?: DataComponentState
    node?: CardNode;
}

const styles = {
    padding: "5px",
    borderBottom: "1px solid #ccc"
};

class CardsProducerToolbar extends React.PureComponent<CardsProducerToolbarProps, any> {
    render() {
        const {node, dataState} = this.props;
        return <div style={styles} className={"cardsProducerToolbar"}>
            <div className={"leftNav"}>
                {
                    node ? <a href={`#${dataState.path}`}><Icon type="left"/></a> :
                        <a href={"#/"}><Icon type="home"/></a>
                }
            </div>
            <div className={"rightNav"}>
                <Button icon={"save"} title={"Save"}/>
            </div>
        </div>;
    }
}

const mapStateToProps = (state: any) => ({
    dataState: state
});
export default connect(mapStateToProps)(CardsProducerToolbar);
