import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { search: ""}
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
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
                <i className="far fa-search"></i>
                <form onSubmit={this.submitSearch}>
                    <input className="search-bar" placeholder="search for events" onChange={this.updateSearch} value={this.state.search} />
                    <button></button>
                </form>
            </div>
      
         ) 
    }

}

export default SearchBar;