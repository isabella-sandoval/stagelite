import React from 'react';
import { Link } from 'react-router-dom';


class EventIndexItem extends React.Component {

    render() {
        const { img_url, title, id, date, time, venue, capacity, address, ticket_link, at_capacity, age_restriction, quantity } = this.props.event;

        return (
            <div className='event-index-item'>
                   
                <Link to={`/event/${id}`}>
                    <img className='event-image' src={img_url}/>
                    <div className="all-event-info">
                        <div className="event-info">
                            <p className='title'>{title}</p>
                            {/* <p className='age-rest'>Event 21+? {age_restriction}</p> */}
                            {/* {quantity >= capacity} ? <p>Sold out</p> : <p className='ticket-link'>{ticket_link}</p> */}
                        </div>

                        <div className='event-date-time'>
                            <p>{date.year}</p>
                            <p>{date.month}</p>
                            <p>{date.day}</p>

                            <p>{time.hour}</p>
                            <p>{time.minute}</p>
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

export default EventIndexItem;