import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import ThresholdView from './threshold/threshold.view';
import SwimTimeView from './swimTime/swimTime.view';

interface State {
}

interface Props {
    swimmingModalNumber: number,
}

class SwimmingModals extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.swimmingModalNumber === 1 ? <ThresholdView /> :
                    this.props.swimmingModalNumber === 2 ? <SwimTimeView /> :
                    null
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    swimmingModalNumber: state.ModalReducer.swimmingModalNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SwimmingModals);
