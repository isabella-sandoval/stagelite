import React from 'react';
import Popup from './popup';
import { Link } from 'react-router-dom';

class EventShow extends React.Component{
    constructor(props){
        super(props)
       
        
        this.state = { showPopup: false };
        this.togglePopup = this.togglePopup.bind(this);
        this.rsvp = this.rsvp.bind(this)
        
    }

    
    togglePopup() {
        if (this.props.currentUser) {
            this.setState({
                showPopup: !this.state.showPopup
            })
        } else {
     
            this.props.history.push("/login")
        }
    }

    rsvp(){
        this.togglePopup()

        const formData = new FormData();

        formData.append('ticket[event_id]', this.props.match.params.eventId);
        formData.append('ticket[quantity]', 1);
        formData.append('ticket[user_id]', this.props.currentUser )
        this.props.rsvpTicket(formData)

    }

    
    
    componentDidMount(){
        this.props.fetchEvents();
     
    }

    render(){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const { event } = this.props;
        
        if (!this.props.event) return null
        
       return(
            <div className="show-container">
                <div className="event-show-container">
                    <img className='event-image-show' src={event.img_url} />
                

                    <div className="event-show-deets">

                        <div className='event-date'>
                           <p className='month'>{months[event.date.month - 1]}</p>
                           <p className='day'>{event.date.day}</p>
                        </div>
                   
                        <p className='event-title'>{event.title}</p>
        
                       {event.organizer_id === this.props.currentUser ? <p className="organizer">You are the organizer</p> : <p className="organizer">organizer:{event.organizer_id}</p>}
                        <p className="venue-name">{event.venue}</p>
                        <p className='address'> {event.address}</p>
    
                    </div>
                </div>
                        <div className='extrainfo'> 
                        <div className='price-age'>
                        <p className="price">${event.price}</p>
                            
                       <p className="age">{event.age_restriction ? <div>21+</div> : <div>All Ages</div>}</p>
                            
                            {event.time.min < 10 ?
                            <div className="date">{event.time.hour}:0{event.time.min} </div> :
                            <div className="date">{event.time.hour}:{event.time.min} </div>
                            }
                   
                       {event.organizer_id === this.props.currentUser ? <button className='edit_event' onClick= {()=>this.props.history.push(`/event/${this.props.event.id}/edit`)}>Edit</button> : <button className='tickets' onClick={this.rsvp}>RSVP</button>}
                    </div>

                   {this.state.showPopup ?
                       <Popup
                           key={event.id}
                           event= {event}
                           closePopup={this.togglePopup.bind(this)}
                       />
                       : null
                   }
                        </div>

                        <div className="background-img-container">
                            <img className='background-img' src={event.img_url} />
                        </div>

                        
           </div>
        )}

}

export default EventShow;


