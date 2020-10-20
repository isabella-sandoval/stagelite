class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null:false
      t.date :date, null:false
      t.time :time, null:false
      t.string :venue, null:false
      t.string :address, null:false
      t.float :latitude, null:false
      t.float :longitude, null:false
      t.float :price, null:false
      t.integer :capacity, null:false
      t.boolean :at_capacity, null:false
      t.boolean :age_restriction, null:false
      t.string :ticket_link, null:false
      t.string :img_url
      t.integer :organizer_id, null:false
      t.integer :genre_id, null:false


      t.timestamps
    end
    add_index :events, :organizer_id
    add_index :events, :genre_id

  end
end
