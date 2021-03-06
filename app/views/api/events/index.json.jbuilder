@events.each do |event|
    json.set! event.id do
       json.extract! event, :id, :title, :venue, :address, :price, :age_restriction, :organizer_id, :genre_id, :capacity, :quantity

        json.date do
            json.date event.date
            json.year event.date.year
            json.month event.date.month
            json.day event.date.day
        end

        json.time do
            json.time event.time
            json.hour event.time.hour
            json.min event.time.min
        end

        
        json.latitude
        json.longitude
        json.capacity
        json.quantity
        json.organizer_id
        json.genre_id
        json.ticket_link
        json.at_capacity

        json.img_url url_for(event.photo)
    end
end

