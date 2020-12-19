import React from 'react';
import { Link } from 'react-router-dom';
import MyTicketItem from './my_ticket_item';

class MyTickets extends React.Component {

  componentDidMount() {
   this.props.fetchTickets(this.props.currentUser.id)
  }

  render() {
    if (this.props.events && (this.props.tickets.length >= 1)) {
      return (
        <div className="my-tickets">
          <div className="rsvp-body">
            <div className="all-tix-container">
              <div className="event-images">
                <p className="rsvp-text">Lots of cool plans ahead! You are RSVP'd for the events listed below.</p>
                <ul>
                  {this.props.tickets.map(ticket => {
                    return <MyTicketItem
                      key={ticket.id}
                      ticket={ticket}
                      event={this.props.events[ticket.event_id - 1]}
                      deleteTicket={this.props.deleteTicket} />
                  })}
                </ul>
              </div>
            </div>
          </div>
                  )

        </div>
      )

    } else {
      return <div className="no-tickets-message">You have not RSVP'd to any events yet.<div>
          <br></br>
          <Link to="/"> Check out our upcoming events!</Link>
        </div>
      </div>
    }
  }
}

export default MyTickets;

// var filteredTickets = [];
// for (let i = 0; i < this.props.tickets.length; i++) {
//   for (let j = 0; j < filteredTickets.length; j++) {
//     if (this.props.tickets[i].event_id !== filteredTickets[j].event_id) {
//       filteredTickets.push(this.props.tickets[i]);
//     }
//   }
// }