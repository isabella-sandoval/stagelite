class Event < ApplicationRecord
    validates :title, :date, :time, :venue, :address, :latitude, :longitude,
        :price, :capacity, :age_restriction, 
        :ticket_link, :organizer_id, :genre_id, presence:true
   

        belongs_to :organizer,
        primary_key: :id,
        foreign_key: :organizer_id,
        class_name: :User

        has_one_attached :photo

    
    
end
