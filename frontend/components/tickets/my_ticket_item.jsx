import React from 'react';
import { Link } from 'react-router-dom';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// class MyTicketItem extends React.Component {
//  constructor(props) {
//     super(props);

//     this.state={
//         updated:'',
//     }
//     this.removeTicket = this.removeTicket.bind(this);
//   }

//   { this.props.history.push(`/myrsvp`) }
//   removeTicket(tic){
//     //   this.props.deleteTicket(tic).then(this.setState({ updated: 'yes' }))
//       this.props.deleteTicket(tic).then(()=>this.props.history.push(`/${this.props.currentUser}/myrsvp`));
//   };

// render(){
//       const {event, ticket, key, deleteTicket } = this.props
//     return (
        const MyTicketItem = ({ ticket, event, deleteTicket, currentUser }) => {
            return (
        <div className='event-index-item'>

                    <button className='remove-ticket' onClick={() => deleteTicket(ticket.id).then(this.props.history.push(`/myrsvp`))}>X</button>

            <Link className="event-ind-link" to={`/event/${event.id}`}>
                <img className='event-image' src={event.img_url} />
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

{/* <button className='remove-ticket' onClick={() => deleteTicket(ticket.id).then(() => this.forceUpdate())}>X</button> */}