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
            ticket_link: 'NA',
            quantity: 1,
            imgUrl: '',
            photoFile: null,
            organizer_id: 17,
            genre_id: 14,
            
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
        const formData = new FormData();
        const curUser = this.props.currentUser;


        formData.append('event[title]', this.state.title);
        formData.append('event[venue]', this.state.venue);
        formData.append('event[date]', this.state.date);
        formData.append('event[time]', this.state.time);
        formData.append('event[price]', this.state.price);
        formData.append('event[capacity]', this.state.capacity);
        formData.append('event[address]', this.state.address);
        formData.append('event[age_restriction]', this.state.age_restriction);
        formData.append('event[genre_id]', this.state.genre_id);
        formData.append('event[quantity]', this.state.quantity);
        formData.append('event[ticket_link]', this.state.ticket_link);
        

        // this.props.processForm(formData)

        if (this.state.photoFile) {
            formData.append('event[photo]', this.state.photoFile);
        }

        if (this.props.formType === 'edit') {
            formData.append('event[id]', this.state.id);
        }

        //not updating
        this.props.processForm(formData).then(
           
                this.props.history.push(`/event/${this.props.event.id}`)
          
        );

   
    }



    componentDidMount() {
        if (this.props.formType === 'edit') {
            this.props.fetchEvent(this.props.eventId).then(() => {
                const { event } = this.props;
                    this.setState(event);
                    // this.setState({ id: event.id });
                    this.setState({ title: event.title });
                    this.setState({ time: event.time.time.slice(-13, -8) });
                    this.setState({ date: event.date.date });
                    this.setState({ price: event.price});
                    this.setState({ capacity: event.capacity});
                    this.setState({ genre_id: event.genre_id});
                    this.setState({ quantity: event.quantity});
                    this.setState({ age_restriction: event.age_restriction});
                    this.setState({ ticket_link: event.ticket_link});

            })
        }
    }

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, imgUrl: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        };
    }


render(){
    console.log(this.state)
    const preview = this.state.imgUrl ? <img className="preview" src={this.state.imgUrl} /> : null;
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

            <input type="integer"
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


            <input type="text"
                value={this.state.price}
                placeholder="price"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                onChange={this.update('price')} />


            {/* <label >Event Genre:</label>
                <select id="genre" className="genre">
                    <option onChange={this.update('genre_id')} value='11'>Rock</option>
                    <option onChange={this.update('genre_id')} value='12'>Funk</option>
                    <option onChange={this.update('genre_id')} value='13'>Disco</option>
                    <option onChange={this.update('genre_id')} value='14'>Pop</option>
                    <option onChange={this.update('genre_id')} value='15'>Electronic</option>
                </select> */}

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
                            name="options"
                           
                        />
                        No
                        <input
                            className="no-radio"
                            value="false"
                            onChange={this.update('age_restriction')}
                            type="radio"
                            name="options"
                            
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


