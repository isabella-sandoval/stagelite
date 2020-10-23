

export const fetchEvent = id => (
    $.ajax({
        method: 'GET',
        url: `/api/events/${id}`
    })
);

export const fetchEvents = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/events/`
    })
}

export const createEvent = (formData) => {
    return $.ajax({
        url: '/api/events',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const updateEvent = (formData) => {
    return $.ajax({
        url: `/api/events/${formData.get("event[id]")}`,
        method: 'PATCH',
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