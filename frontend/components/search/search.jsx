import React from 'react';
import EventIndexItem from '../events/event_index_item';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "" }

        this.updateSearch = this.updateSearch.bind(this);
    }


    updateSearch(e) {
        this.setState({ search: e.currentTarget.value })
    }


    render() {
        const { events } = this.props;


        if (events.length === 0) {
            return null;
        } 
        let searched = this.state.search
        
        let filteredTitles = Object.values(events)
            .filter(event => (
                event.title.toLowerCase().includes(searched.toLowerCase())
            ))

        let filteredLocations = Object.values(events)
            .filter(event => (
                event.address.toLowerCase().includes(searched.toLowerCase())
            ))
 
        if(searched.length === 0) {
            return (
                <div>
                    <div className="search-bar-container">
                        <form onSubmit={this.submitSearch}>
                            {/* <i class="fas fa-search"></i> */}
                            <input className="search-bar" placeholder="Search events" value={this.state.search} onChange={this.updateSearch} type="text" />

                        </form>
                    </div>

                    <div className="event-images">
                        <ul>
                            {Object.values(events).map(event => { return <EventIndexItem event={event} key={event.id} /> })}
                        </ul>
                    </div>
                </div>
            )
        } else if (filteredTitles.length !== 0 || filteredLocations.length !== 0) {
            return (
                <div>
                    <div className="search-bar-container">
                        <form onSubmit={this.submitSearch}>
                            {/* <i class="fas fa-search"></i> */}
                            <input className="search-bar" placeholder="Search events" value={this.state.search} onChange={this.updateSearch} type="text" />

                        </form>
                    </div>
                    <div className="event-images">
                        <ul>
                            {Object.values(filteredTitles).map(event => { return <EventIndexItem event={event} key={event.id} /> })}
                            {Object.values(filteredLocations).map(event => { return <EventIndexItem event={event} key={event.id} /> })}
                        </ul>
                    </div>
                </div>
            )

            }else{
                return(
                    <div>
                        <div className="search-bar-container">
                            <form onSubmit={this.submitSearch}>
                                {/* <i class="fas fa-search"></i> */}
                                <input className="search-bar" placeholder="Search events" value={this.state.search} onChange={this.updateSearch} type="text" />

                            </form>
                        </div>
                        <p className="no-events">Darn... no events were found! Please search by event title or location.</p>
                    </div>
                )
            }
        
           
    }

}

export default Search;