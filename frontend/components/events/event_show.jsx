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
        
        if(!this.props.event) return null;
        
       return(
            <div className="show-container">
                <div className="event-show-container">
                    <img className='event-image' src={event.img_url} />
                </div>

                <div className="event-show-deets">
                    <p>{event.title}</p>
                    <p>by organizer:{event.organizer_id}</p>
                    <p>${event.price}</p>
                    <p>{event.age_restriction ? <div>21+</div> : <div>All Ages</div>}</p>

                    <div className='event-date-time'>
                        <p className="date-and-time">Date and Time</p>
                        <p>{days[event.date.day % 7]} {months[event.date.month - 1]} {event.date.day}, {event.date.year}</p>
                        {event.time.min < 10 ?
                           <div className="date">{event.time.hour}:0{event.time.min} PM</div> :
                           <div className="date">{event.time.hour}:{event.time.min} PM</div>
                        }
                    </div>
               </div>
               <div className="background-img-container">
                   <img className='background-img' src={event.img_url} />
               </div>

           </div>
        )


        }

}

export default EventShow;