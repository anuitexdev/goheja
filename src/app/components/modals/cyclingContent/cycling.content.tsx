import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import CyclingFtpView from './cyclingFtp/cyclingFtp.view';
import CyclingLactateView from './lactate/lactate.view';
import SpeedView from './speed/speed.view';
import RockView from './rock/rock.view';


interface State {
}

interface Props {
    cyclingModalNumber: number,
}

class CyclingModals extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
            
                {
                    this.props.cyclingModalNumber === 1 ? <CyclingFtpView /> :
                    this.props.cyclingModalNumber === 2 ? <CyclingLactateView /> :
                    this.props.cyclingModalNumber === 3 ? <SpeedView /> :
                    this.props.cyclingModalNumber === 4 ? <RockView /> :    <CyclingFtpView />
                }

            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    cyclingModalNumber: state.ModalReducer.cyclingModalNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CyclingModals);
