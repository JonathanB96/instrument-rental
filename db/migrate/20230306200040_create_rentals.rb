class CreateRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :rentals do |t|
      t.integer :instrument_id
      t.integer :user_id

      t.timestamps
    end
  end
end
