@events.each do |event|
    json.set! event.id do
       json.extract! event, :id, :title
        json.date
        json.time
        

        json.imageUrl url_for(event.photo)
    end
end