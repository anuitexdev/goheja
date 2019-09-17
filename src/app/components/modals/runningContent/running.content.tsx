import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import LactateView from './lactate/lactate.view';
import ThresholdView from './lactate/lactate.view';


interface State {
}

interface Props {
    modalNumber: number,
}

class RunningModals extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {this.props.modalNumber === 1 ? <LactateView /> : <ThresholdView />}
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    modalNumber: state.ModalReducer.modalNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RunningModals);
