import { fetchEvents, fetchEvent } from "../actions/event_actions";


export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_GENRE = 'UPDATE_GENRE';



export const changeGenre = genre => {
    return ({
        type: UPDATE_CATEGORY,
        genre
    })
};

export const changeSearch = search => ({
    type: UPDATE_SEARCH,
    search
})


export const updateCategory = category => (dispatch, getState) => {
    dispatch(changeCategory(category));
    return fetchEvents(getState().ui.filters)(dispatch);
}

export const updateSearch = search => (dispatch, getState) => {
    dispatch(changeSearch(search));
    return fetchEvents(getState().ui.filters)(dispatch);
}