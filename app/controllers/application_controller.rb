class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do

  end
  
  # Add your routes here
  get "/stores" do
    Store.all.to_json()
  end
 #(include: :inventories)

  get "/inventories" do
    Inventory.all.to_json()
  end


  # post "/inventories" do
  #   #binding.pry
  #   Inventory.create(hat_name: params[:hat_name], store_id: params[:store_id]).to_json()
  # end

  post "/stores" do
    #binding.pry
    Store.create(store_name: params[:store_name], phone_number: params[:phone_number], address: params[:address]).to_json
  end


  post "/inventories" do
    #binding.pry
    Inventory.create(hat_name: params[:hat_name], price: params[:price], quantity: params[:quantity], image_url: params[:image_url], description: params[:description], store_id: params[:store_id]).to_json
  end

  delete "/inventories/:id" do 
    Inventory.find(params[:id]).destroy
  end

  patch "/inventories/:id" do
    Inventory.find(params[:id])
    Inventory.update(quantity: params[:quantity], price: params[:price]).to_json
  end

  # delete "/stores/:id" do 
  #   Store.find(params[:id]).destroy
  # end
end
