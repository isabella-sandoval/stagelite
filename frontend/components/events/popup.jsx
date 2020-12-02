import React from 'react';

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>You are now registered for {this.props.event.title} on {months[this.props.event.date.month - 1]} {this.props.event.date.day}!</h1>
                    <button onClick={this.props.closePopup}>Got it!</button>
                </div>
            </div>
        );
    }
}

export default Popup;

