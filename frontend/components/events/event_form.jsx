import React from 'react';


class EventForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            date: '',
            venue: '',
            capacity: '',
            time: '',
            address: '',
            price: '',
            age_restriction: '',
            ticket_link: '',
            quantity: '',
            photo: null,
            
        }  
        

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    update(field) {
        // debugger
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const event = Object.assign({}, this.state);
        this.props.processForm(event)
    }



    componentDidMount() {
        if (this.props.formType === 'edit') {
            this.props.fetchEvent(this.props.eventId).then(() => {
                const { event } = this.props;
                    this.setState(event);
                    this.setState({ title: event.title });
                    this.setState({ time: event.time});
                    this.setState({ date: event.date });
                    this.setState({ price: event.price});
                    this.setState({ genre: event.genre});
                    this.setState({ price: event.price});
                    this.setState({ age_restriction: event.age_restriction});

            })
        }
    }



    renderErrors() {
       
    }





render(){
    return(
    <div>
        <form className="event-form">
            <div className="basic-info-text">
                <h1>Basic Info</h1>
            </div>

                <input type="text"
                    value={this.state.title}
                    placeholder="title"
                    onChange={this.update('title')}/>

                {/* <input type="text"
                    value={this.state.genre}
                    placeholder="genre"
                    onChange={this.update('genre')}/> */}


            <div className="location-text">
                <h1>Location</h1>
            </div>

            <input type="text"
                value={this.state.venue}
                placeholder="venue"
                onChange={this.update('venue')} />


            <input type="text"
                value={this.state.address}
                placeholder="address"
                onChange={this.update('address')} />

            <input type="text"
                value={this.state.capacity}
                placeholder="capacity"
                onChange={this.update('capacity')} />


            <div className="date-time-text">
                <h1>Date and Time</h1>
            </div>

            <input type="date"
                value={this.state.date}
                placeholder="date"
                onChange={this.update('date')} />
            
            <input type="time"
                value={this.state.time}
                placeholder="time"
                onChange={this.update('time')} />


            <div className="event-deets">
                <h1>Event Details</h1>
            </div>


            <input type="integer"
                value={this.state.price}
                placeholder="price"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                onChange={this.update('price')} />


            <input type="text"
                    value={this.state.ticket_link}
                    placeholder="ticket_link"
                    onChange={this.update('ticket_link')} />

                <div><h1>Is this event 21+?</h1>
            </div>
                <div className="radio-buttons">
                        Yes
                        <input
                            className="yes-radio"
                            value="true"
                            name={this.update('age_restriction')}
                            type="radio"
                           
                        />
                        No
                        <input
                            className="no-radio"
                            value="false"
                            name={this.update('age_restriction')}
                            type="radio"
                            
                        />
                </div>

            
            <div className='event-error-messages'>{this.renderErrors()}</div>
            <input className="event-submit" type="submit" value='Submit' />

        </form>
    </div>

    )
}

}

export default EventForm;