import React, { Component } from "react";
import { Alert } from 'reactstrap';

class Alerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
        this.onDismiss = this.onDismiss.bind(this);
    }
    onDismiss(){
        this.setState({visible: !this.state.visible});
    }
    render() {
        return (
            <Alert color="info"  isOpen={this.state.visible}>
                <div className="container" style={{position:"fixed"}}>
                    <div className="alert-icon">
                        <i className="now-ui-icons ui-2_like"></i>
                    </div>
                    <strong>Well done!</strong> You successfully read this important alert message.
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={this.onDismiss}
                    >
                        <span aria-hidden="true">
                            <i className="now-ui-icons ui-1_simple-remove"></i>
                        </span>
                    </button>
                </div>
            </Alert>
        )
    }
}

export default Alerts;