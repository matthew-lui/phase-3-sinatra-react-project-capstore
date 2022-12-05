Store.destroy_all
Inventory.destroy_all
puts "creating stores"
s1 = Store.create(store_name: "Matts Crazy Caps", address: "123 Main St Suite 1", phone_number: "555-456-7890")
s1 = Store.create(store_name: "Matts Wacky Caps", address: "123 Main St Suite 2", phone_number: "555-456-7891")
s1 = Store.create(store_name: "Matts Wacky Caps", address: "123 Main St Suite 3", phone_number: "555-456-7892")


puts "🌱 Seeding spices..."
# Seed your database here
puts "✅ Done seeding!"