import React from 'react';
import { Redirect } from 'react-router';
import SearchBar from '../search/search';
// import search_bar_container from './search_bar_container';
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

        return(
            <div className="splash-body">
                <div className="splash-text">
                    <p>Live events for your</p>
                </div>
                
                <div className="splash-text2">
                    <p>post COVID utopian!</p>
                </div>
                
                <div className="all-events-container">
                <SearchBar events={events}/>  
            
    {/*                 
                    <div className="event-images">
                        <ul>
                            {Object.values(events).map(event => { return <EventIndexItem event={event} key={event.id} />})}
                        </ul>
                    </div> */}
                </div>
  
            </div>
        )
    }
}

export default EventIndex;


