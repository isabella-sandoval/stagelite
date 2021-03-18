import React from 'react';
import { Link } from 'react-router-dom';
import MyTicketItem from './my_ticket_item';

class MyTickets extends React.Component {
  constructor(props) {
    super(props);
    this.getEvent = this.getEvent.bind(this)
  }


  getEvent(eventId){
    let eventLookingFor;
    this.props.events.forEach(event =>{
      if(event.id === eventId){
        eventLookingFor = event;
      }
    })
    return eventLookingFor
  }

  componentDidMount() {
    this.props.fetchTickets(this.props.currentUser.id)
    this.props.fetchEvents()

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
                      event={this.getEvent(ticket.event_id)}
                      deleteTicket={this.props.deleteTicket}
                      currentUser={this.props.currentUser} 
                      fetchTickets={this.props.fetchTickets}
                      fetchEvents = {this.props.fetchEvents}
                      />
                  })
                  }
                </ul>
              </div>
            </div>
          </div>
          )

        </div>
      )
    } else {
      return (
      <div className="no-tickets-message">You have not RSVP'd to any events yet.<div>
          <br></br>
          <Link to="/"> Check out our upcoming events!</Link>
        </div>
      </div>
      )}
  }
}

export default MyTickets;

