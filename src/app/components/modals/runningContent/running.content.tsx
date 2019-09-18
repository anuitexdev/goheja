import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import LactateView from './lactate/lactate.view';
import ThresholdView from './threshold/threshold.view';


interface State {
}

interface Props {
    runningModalNumber: number,
}

class RunningModals extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {this.props.runningModalNumber === 1 ? <LactateView /> : <ThresholdView />}
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    runningModalNumber: state.ModalReducer.runningModalNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RunningModals);
