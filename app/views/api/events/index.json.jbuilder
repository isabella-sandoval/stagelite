@events.each do |event|
    json.set! event.id do
       json.extract! event, :id, :title
        json.date
        json.time
        json.title
        json.venue
        json.address
        json.latitude
        json.longitude
        json.capacity
        json.price
        json.age_restriction
        json.organizer_id
        json.genre_id
        json.ticket_link
        json.at_capacity

        json.imageUrl url_for(event.photo)
    end
end

