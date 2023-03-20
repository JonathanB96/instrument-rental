class CreateInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :quantity
      t.string :image_url 
      t.string :show_image
      t.integer :family_id

      t.timestamps
    end
  end
end
