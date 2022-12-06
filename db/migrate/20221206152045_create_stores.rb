class CreateStores < ActiveRecord::Migration[6.1]
  def change

    create_table :stores do |t|
      t.string :store_name
      t.string :address 
      t.integer :phone_number
    end
  end
end
