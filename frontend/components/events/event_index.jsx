import React from 'react';
import { Redirect } from 'react-router';
import EventIndexItem from './event_index_item';



class EventIndex extends React.Component {
    constructor(props) {
        super(props);

        
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render(){
        const { events } = this.props;

        let arr = ["2","3","4","5"]
        return(
            <div className="splash-body">
                <div className="splash-text">
                    <p>Live events for your</p>
                </div>
                
                <div className="splash-text2">
                    <p>post COVID utopian!</p>
                </div>
                
                
            <div className="all-events-container">
          
                
                <div className="event-images">
                    <ul>
                        {arr.map(event => { return <li key={event} />})}
                    </ul>
                </div>
            </div>
  
            </div>
        )
    }
}

export default EventIndex;


