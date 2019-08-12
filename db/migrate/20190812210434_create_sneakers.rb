class CreateSneakers < ActiveRecord::Migration[5.2]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.string :brand
      t.string :description
      t.string :review
      t.string :imgurl
      t.integer :price

      t.timestamps
    end
  end
end
