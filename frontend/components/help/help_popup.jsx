import React from 'react';


class HelpPopup extends React.Component {
    constructor(props) {
        super(props)


        this.state = { showPopup: false };
        this.togglePopup = this.togglePopup.bind(this);

    }

    togglePopup() {
       
        this.setState({
                showPopup: !this.state.showPopup
        })
    
    }


    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <p className="s-logo-popup">S</p>
                    <h1>Only you can help yourself!</h1>
                    <button onClick={this.closePopup}>Got it!</button>
                </div>
            </div>
        );
    }
}

export default HelpPopup;