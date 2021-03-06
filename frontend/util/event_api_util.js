export const fetchEvent = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/events/${id}`
    })
};

export const fetchEvents = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/events/`
    })
}

export const createEvent = (formData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/events',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const updateEvent = (formData) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/events/${formData.get("event[id]")}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deleteEvent = (id) => {
    return $.ajax({
        method: `DELETE`,
        url: `/api/events/${id}`
    })
}