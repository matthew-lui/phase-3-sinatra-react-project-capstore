class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
          t.string :hat_name
          t.integer :price
          t.integer :quantity
          t.string :image_url
          t.text :description
          t.integer :store_id
    end
  end
end
