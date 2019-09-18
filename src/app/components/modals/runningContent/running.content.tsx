import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import LactateView from './lactate/lactate.view';
import ThresholdView from './threshold/threshold.view';
import AchievementsView from './achievements/achievements.view';
import AwsomeView from './awsome/awsome.view';
import RockView from './rock/rock.view';

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
                {
                    this.props.runningModalNumber === 1 ? <LactateView /> :
                    this.props.runningModalNumber === 2 ? <ThresholdView /> : 
                    this.props.runningModalNumber === 3 ? <AchievementsView /> :
                    this.props.runningModalNumber === 4 ? <AwsomeView /> :
                    this.props.runningModalNumber === 5 ? <RockView /> : null
                }
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
