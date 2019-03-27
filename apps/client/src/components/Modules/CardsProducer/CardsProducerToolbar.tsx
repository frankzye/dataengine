import * as React from 'react';
import {Button} from "antd";
import {connect} from "react-redux";
import {DataComponentState} from "../../Entities/DataComponentState";

interface CardsProducerToolbarProps {
    dataState?: DataComponentState
}

const styles = {
    padding: "5px",
    borderBottom: "1px solid #ccc"
};

export class CardsProducerToolbar extends React.PureComponent<CardsProducerToolbarProps, any> {
    render() {
        return <div style={styles}>
            <Button icon={"save"} title={"Save"}/>
        </div>;
    }
}

const mapStateToProps = (state: any) => ({
    dataState: state
});
export default connect(mapStateToProps)(CardsProducerToolbar);
