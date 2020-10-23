import React from 'react';


class EventForm extends React.Component{
    constructor(props){
        super(props);

        this.state ={
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

    }

    componentDidMount() {
        if (this.props.formType === 'edit') {
            this.props.fetchEvent(this.props.eventId).then(() => {
                const { event } = this.props;
                    this.setState(event);
                    this.setState({ id: event.id });
                    this.setState({ time: event.time.time.slice(-13, -8) });
                    this.setState({ date: event.date.date });
            })
        }
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
                    placeholder="Event Title"
                    onChange={this.update('title')}/>

                <input type="text"
                    value={this.state.genre}
                    placeholder="Event Genre"
                    onChange={this.update('genre')}/>


            <div className="location-text">
                <h1>Location</h1>
            </div>

            <input type="text"
                value={this.state.address}
                placeholder="address"
                onChange={this.update('address')} />


            <div className="date-time-text">
                <h1>Location</h1>
            </div>

            <input type="text"
                value={this.state.address}
                placeholder="address"
                onChange={this.update('address')} />


        </form>
    </div>

    )
}

}

