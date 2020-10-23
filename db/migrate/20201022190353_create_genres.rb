class CreateGenres < ActiveRecord::Migration[5.2]
   def change
      create_table :genres do |t|
        t.text :title, null: false
      end

    add_index :genres, :title
    end
end
