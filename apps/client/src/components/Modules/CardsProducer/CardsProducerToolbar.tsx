import * as React from 'react';
import {Button} from "antd";
import {connect} from "react-redux";
import {DataComponentState} from "../../Entities/DataComponentState";

interface CardsProducerToolbarProps {
    dataState?: DataComponentState
}

export class CardsProducerToolbar extends React.PureComponent<CardsProducerToolbarProps, any> {
    render() {
        return <div>
            <Button icon={"save"} title={"Save"}/>
        </div>;
    }
}

const mapStateToProps = (state: any) => ({
    dataState: state
});
export default connect(mapStateToProps)(CardsProducerToolbar);
