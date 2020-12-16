import React from 'react';
import { Link } from 'react-router-dom';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MyTicketItem = ({ ticket, event }) => {
    return (
        <div className='event-index-item'>

            <Link className="event-ind-link" to={`/event/${event.id}`}>
                {/* <img className='event-image' src={event.img_url} /> */}
                    <div className="all-event-info">
                        <p className='event-date-time'>
                            <p>{days[event.date.day % 7]}, {months[event.date.month - 1]} {event.date.day}, {event.date.year}</p>

                        </p>
                        <p className="event-info">
                            <p className='title'>{event.title}</p>
                        </p>
                    </div>    
            </Link>

        </div>
    )
}

export default MyTicketItem;