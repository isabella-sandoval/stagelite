import React from 'react';
import { Redirect } from 'react-router';
import EventIndexItem from './event_index_item';



class EventIndex extends React.Component {
    constructor(props) {
        super(props);

        
    }

    componentDidMount() {
        this.props.fetchEvents(this.state);
    }

    render(){
        const { events } = this.props;


        return(
            <div className="splash-body">
                <div className="splash-text">
                    <p>Live events for your</p>
                </div>
                
                <div className="splash-text2">
                    <p>post COVID utopian!</p>
                </div>
                
                
            
          
                
                <div>
                    <ul>
                        {Object.values(events).map(event =>{debugger; return <EventIndexItem event={event} key={event.id} />})}
                    </ul>
                </div>
            </div>
  
        )
    }
}

export default EventIndex;

{/* <div className="splash-page-img-container">
                    <img className="splash-page-img" src={images.splash} ></img>
                </div> */}
