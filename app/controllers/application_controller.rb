class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do

  end
  
  # Add your routes here
  get "/stores" do
    Store.all.to_json(include: :inventories)
  end

  # get "/:id" do
  #   Inventory.all.to_json
  # end

end
