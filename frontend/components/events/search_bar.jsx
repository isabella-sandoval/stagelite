import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { search: ""}
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        // this.props.fetchEvents();
    }

    updateSearch(e) {
        this.setState({ search: e.currentTarget.value })
    }


    render() {
        const { events } = this.props;
        // const EventsArr = Object.values(this.props.events)

        // // const returnEvent = EventsArr
        //     .filter(event => {
        //         if (!event) {
        //             return null
        //         } else {
        //             let searchString = this.state.search.toLowerCase().replace()
        //             let regex = new RegExp(searchString, 'g');
        //             this.props.history.push("/events/search")
        //         }
        //     })

        return (
            <div className="search-bar-container">
                <form onSubmit={this.submitSearch}>
                    <i class="fas fa-search"></i>
                    <input className="search-bar" placeholder="Search events" onChange={this.updateSearch} value={this.state.search} />
                    
                </form>
            </div>
      
         ) 
    }

}

export default SearchBar;