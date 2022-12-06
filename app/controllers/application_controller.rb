class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do

  end
  
  # Add your routes here
  get "/stores" do
    Store.all.to_json
  end

  get "/inventories" do
    Inventory.all.to_json
  end

end
