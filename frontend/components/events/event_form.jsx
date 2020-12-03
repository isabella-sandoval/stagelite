import React from 'react';
import eventsReducer from '../../reducers/events_reducer';
import { Redirect } from 'react-router';

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
            photo: '',
            
        }  
        

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        
    }

    update(field) {
        
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const UserEvent = Object.assign({}, this.state);
        this.props.processForm(UserEvent)

        if (this.state.photoFile) {
            formData.append('UserEvent[photo]', this.state.photo);
        }
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

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, imageUrl: fileReader.result });
        };

       

    }

    renderErrors() {
       
    }





render(){
    const preview = this.state.imageUrl ? <img className="preview" src={this.state.imageUrl} /> : null;
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


            {/* <input type="text"
                    value={this.state.ticket_link}
                    placeholder="ticket_link"
                    onChange={this.update('ticket_link')} /> */}

                <div><h1>Is this event 21+?</h1>
            </div>
                <div className="radio-button">
                        Yes
                        <input
                            className="yes-radio"
                            value="true"
                            onChange={this.update('age_restriction')}
                            type="radio"
                           
                        />
                        No
                        <input
                            className="no-radio"
                            value="false"
                            onChange={this.update('age_restriction')}
                            type="radio"
                            
                        />
                </div>

                    <div className="img-input-container">
                

                        {preview ?
                            (<div className="border-container">
                                <h1>Event Image
                                <input
                                    type="file"
                                    onChange={this.handleFile}></input>
                                {preview}
                                </h1>
                            </div>)
                            : (<div className="border-container">
                                <h1>Event Image
                                <input
                                    type="file"
                                    onChange={this.handleFile}></input>

                                </h1>    
                            </div>)}

                
                    </div>

            <div className='event-error-messages'>{this.props.errors ? this.props.errors.join(', ') : null}</div>
                <input className="event-submit" type="submit" value='Submit' onClick={this.handleSubmit}/>

        </form>
    </div>

    )
}

}

export default EventForm;


// add Dynos 


// adjust words and date in box

// dropdown to show who you

// edit and delete events

// pop up when added to event

//search bar

//about links for both projects


