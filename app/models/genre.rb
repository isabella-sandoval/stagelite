class Genre < ApplicationRecord
    validates :title, presence:true

    has_many :events
    
end