import React from 'react';


class EventShow extends React.Component{
    constructor(props){
        super(props)
       
        
    }

    componentDidMount(){
        const eventId = this.props.match.params.eventId;
        this.props.fetchEvent(eventId);
    }

    render(){
       
        if (!this.props.event) return null;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const { event } = this.props;
        
       return(
            
            <div className="event-show-container">
                <img className='event-image' src={this.props.event} />
               <p>{this.props.event.title}</p>
            
                
                
                {/* A very well polished event show page */}
            </div>
        )


        }

}

export default EventShow;