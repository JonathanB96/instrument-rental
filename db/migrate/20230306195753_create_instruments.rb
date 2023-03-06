class CreateInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :quantity
      t.integer :family_id

      t.timestamps
    end
  end
end
