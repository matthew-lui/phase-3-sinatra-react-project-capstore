class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do

  end
  
  # Add your routes here
  get "/stores" do
    Store.all.to_json(include: :inventories)
  end

  # post "/inventories" do
  # #binding.pry
  # inventory = Inventory.create(hat_name: params[:hat_name], store_id: params[:store_id]).to_json
  # end


  post "/inventories" do
    #binding.pry
  inventory = Inventory.create(hat_name: params[:hat_name], price: params[:price], quantity: params[:quantity], image_url: params[:image_url], description: params[:description], store_id: params[:store_id]).(include: :stores).to_json
  end

  delete "/inventories/:id" do 
  inventory = Inventory.find(params[:id]).(includes: :stores).destroy
  end

  patch "/inventories/:id" do
  inventory = Inventory.find(params[:id])
  inventory.update(quantity: params[:quantity], price: params[:price], image_url: params[:image_url]).(includes: :stores).to_json
  end

  # get "/:id" do
  #   Inventory.all.to_json
  # end

end
