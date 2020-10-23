import React from 'react';

class EventShow extends React.Component{
    constructor(props){
        super(props)
       
    }


    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);

    }

    render() {
        
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return(
            <div className="event-show-container">
                {/* <img className='event-image' src={this.props.event.img_url} /> */}
                
                A very well polished event show page

                
            </div>
        )
        }

}

export default EventShow;