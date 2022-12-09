Store.destroy_all
Inventory.destroy_all

puts "creating stores"
s1 = Store.create(store_name: "Hat Club", address: "123 Main St Suite 1", phone_number: 5554567890)
# s2 = Store.create(store_name: "Matts Wacky Caps", address: "123 Main St Suite 2", phone_number: "555-456-7891")
# s3 = Store.create(store_name: "Matts Wacky Caps", address: "123 Main St Suite 3", phone_number: "555-456-7892")


puts "🌱 Seeding spices..."
Inventory.create(hat_name: "Helicopter Hat", price: 25, quantity: 100, image_url: "https://m.media-amazon.com/images/I/51cZ2uCpvLL._AC_UL1000_.jpg", description: "Fun helicopter hat for all ages", store_id: s1.id, likes: 10)
Inventory.create(hat_name: "Tater Hat", price: 20, quantity: 100, image_url: "https://i5.walmartimages.com/asr/b2df1a33-05b9-4bb5-9cb6-37924baf805e.327bac13bad60e149448e59ef6bb5893.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", description: "TATERS GON' TATE - joke hat", store_id: s1.id, likes: 10)
Inventory.create(hat_name: "Argentina Soccer hat", price: 30, quantity: 200, image_url: "https://cdn.shopify.com/s/files/1/0817/3919/products/XC-RGWSS04GWS-CO-HR-F.jpg?v=1668634187", description: "classic blue cap. Representing Argentina!", store_id: s1.id, likes: 10)
Inventory.create(hat_name: "Brazil hat", price: 30, quantity: 200, image_url: "https://images.footballfanatics.com/brazil-national-team/nike-brazil-core-cap-adjustable-hat-gold_pi1665000_altimages_ff_1665373alt1_full.jpg?_hv=2&w=900", description: "classic yellow cap, Representing Brazil", store_id: s1.id, likes: 10)
Inventory.create(hat_name: "USA Soccer Hat", price: 30, quantity: 100, image_url: "https://fanatics.frgimages.com/mens-new-era-white-uswnt-team-9twenty-adjustable-hat_pi4800000_altimages_ff_4800256-1cfe637c2c5cb61ce156alt1_full.jpg?_hv=2&w=900", description: "classic red, white and blue soccer cap", store_id: s1.id, likes: 10)
Inventory.create(hat_name: "Christmas hat", price: 30, quantity: 90, image_url: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/christmas-tree-hat~4_4984", description: "Take Christmas wherever you go!", store_id: s1.id, likes: 10)
Inventory.create(hat_name: "Hanukkah hat", price: 30, quantity: 90, image_url: "https://www.villagehatshop.com/photos/product/giant/4511390S91073/-/size-one-size-fits-most.jpg", description: "Celebrate Hanukkah wherever you go!", store_id: s1.id, likes: 10)






puts "✅ Done seeding!"


