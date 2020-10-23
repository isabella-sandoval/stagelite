import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class EventIndexItem extends React.Component {

    render() {
        const { img_url, title, id, date, time, venue, capacity, address, ticket_link, at_capacity, age_restriction, quantity } = this.props.event;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className='event-index-item'>
                   
                <Link className="event-ind-link" to={`/events/${id}`}>
                    
                        <img className='event-image' src={img_url}/>
                        <div className="all-event-info">
                            <div className="event-info">
                                <p className='title'>{title}</p>
                                {/* <p className='age-rest'>Event 21+? {age_restriction}</p> */}
                                {/* {quantity >= capacity} ? <p>Sold out</p> : <p className='ticket-link'>{ticket_link}</p> */}
                            </div>

                            <div className='event-date-time'>
                                <p>{days[date.day % 7]}, {months[date.month - 1]} {date.day}, {date.year}</p>
                        

                                {/* <p>{time.hour}</p>
                                <p>{time.minute}</p> */}
                            </div>

                            <div className='location'>
                                <p>{venue}</p>
                                <p>{address}</p>
                            </div>
                    
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(EventIndexItem);