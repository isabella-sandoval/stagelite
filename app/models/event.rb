class Event < ApplicationRecord
    validates :title, :date, :time, :venue, :address, :price, :capacity, :organizer_id, presence:true
    validates :age_restriction, inclusion:{in: [true, false] }
   

        belongs_to :organizer,
        primary_key: :id,
        foreign_key: :organizer_id,
        class_name: :User


        belongs_to :genre

        has_many :tickets
        
        has_one_attached :photo

    
    
end
