json.event do 
        json.id
        json.title
        json.date
        json.time
        json.venue
        json.address
        json.latitude
        json.longitude
        json.capacity
        json.quantity
        json.price
        json.age_restriction
        json.organizer_id
        json.genre_id
        json.ticket_link
        json.at_capacity

        json.img_url url_for(event.photo)

end