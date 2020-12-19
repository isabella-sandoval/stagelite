@event.id do
       json.extract! @event, :title, :venue, :address, :capacity, :price, :age_restriction, :ticket_link, :genre_id, :organizer_id

        json.date do
            json.month @event.date.month
            json.day @event.date.day
            json.yr @event.date.year
            json.date @event.date
        end

        json.time do
           json.hour @event.time.hour
            json.min @event.time.min
            json.time @event.time
        end


        json.imgUrl url_for(@event.photo)
end