import React from 'react';
import { Link } from 'react-router-dom';
import MyTicketItem from './my_ticket_item';

class MyTickets extends React.Component {

    componentDidMount() {
        this.props.fetchTickets(this.props.currentUser).then(() => {
            this.props.fetchEvents();
        })
    }

    render() {
        if (this.props.events && this.props.tickets) {
            return (
              <div className="my-tickets">
                    <div className="rsvp-body">
                      <div className="all-events-container">
                          <div className="event-images">
                            <p className="rsvp-text">Lots of cool plans ahead! You are RSVP'd for the events listed below.</p>
                            <ul>
                              {this.props.tickets.map(ticket => { return <MyTicketItem 
                                        key={ticket.id}
                                        ticket={ticket}
                                        event={this.props.events[ticket.event_id]} /> })}
                              </ul>
                                    </div>
                                  </div>
                                </div>
                  )
               
              </div>
            )
            
        } else {
            return <div className="no-tickets-message">You have not RSVP'd to any events yet. 
                        <div>
                    <br></br>
                            <Link to="/"> Check out our upcoming events!</Link>
                        </div>
                    </div>
        }
    }
}

export default MyTickets;