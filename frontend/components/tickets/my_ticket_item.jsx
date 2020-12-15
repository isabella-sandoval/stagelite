import React from 'react';


const MyTicketItem = ({ ticket, event }) => {
    return (
        <div>
            <div>{event.title}</div>
            <div>{ticket.qty}</div>
        </div>
    )
}

export default MyTicketItem;