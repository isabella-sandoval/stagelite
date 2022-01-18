import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class EventIndexItem extends React.Component {

    render() {
        const { img_url, title, id, date, time, venue, capacity, address, ticket_link, at_capacity, age_restriction, quantity } = this.props.event;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className='event-index-item'>
                   
                <Link className="event-ind-link" to={`/event/${id}`}>
                    
                        <img className='event-image' src={img_url}/>
                        <div className="all-event-info">
                            <p className='event-date-time'>{days[date.day % 7]}, {months[date.month - 1]} {date.day}</p>
                        <p className='event-ven'>{venue} ({age_restriction ? <p className='age-rest'>21+</p> : <p className='age-rest'>All Ages</p>})</p>
                            
                            <span className="event-info">
                                <p className='title'>{title}</p>
                            </span>
                    
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(EventIndexItem);