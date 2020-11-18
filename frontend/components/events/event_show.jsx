import React from 'react';


class EventShow extends React.Component{
    constructor(props){
        super(props)
       
    }

    componentDidMount(){
        const eventId = this.props.match.params.eventId;
        this.props.fetchEvent(eventId);
    }

    render(){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const { event } = this.props;
        
       return(
            <div className="show-container">
                <div className="event-show-container">
                    <img className='event-image' src={event.img_url} />
                </div>
                <div className="event-show-deets">
                    <p>{event.title}</p>
                    <div className='event-date-time'>
                        <p className="date-and-time">Date and Time</p>
                        <p>{days[event.date.day % 7]}, {months[event.date.month - 1]} {event.date.day}, {event.date.year}</p>
                        {event.time.min < 10 ?
                            <div className="date">{event.time.hour}:0{event.time.min} PM</div> :
                            <div className="date">{event.time.hour}:{event.time.min} PM</div>
                        }
                    </div>
                    <p>${event.price}</p>
               </div>
           </div>
        )


        }

}

export default EventShow;