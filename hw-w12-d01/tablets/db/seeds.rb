# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stuff = [
  {
    "id": 1,
    "name": "Trevoog",
    "entry": "Today Irwikiwaki touch bright hot energy.  Can not explain so we invent Thor.  Thor invent 'fire'."
  },
  {
    "id": 2,
    "name": "Irwikiwaki",
    "entry": "Today I observed it takes 4 rocks and 2 sticks to sink duck.  How do Irwikiwaki and Trevoog make large duck to ride?"
  },
  {
    "id": 3,
    "name": "Trevoog",
    "entry": "9 ducks will not float 1 Trevoog.  On positive side, Trevoog invented towel that dry Trevoog nicely."
  },
  {
    "id": 4,
    "name": "Irwikiwaki",
    "entry": "Today I chase ducks with Thor flame. Ducks hate Thor flame.  Slow ducks become fast ducks."
  },
  {
    "id": 5,
    "name": "Irwikiwaki",
    "entry": "45-duck-boat carries 1 Irwikiwaki and a Trevoog.  0-60 in 4 hours!  Success."
  },
  {
    "id": 6,
    "name": "Trevoog",
    "entry": "We chase 45-duck-boat with 3-log-Thor-flame.  Duck boat much fast now."
  },
  {
    "id": 7,
    "name": "Trevoog",
    "entry": "Duck boat complete.  Next mission - invent purple."
  }
]

stuff.each do |stuf|
  #create new instance of entry
  new_entry = Entry.new
  #let's create some properties
  new_entry.serial = stuf[:id]
  new_entry.name = stuf[:name]
  new_entry.body = stuf[:entry]
  #checking if stuff worked
  if new_entry.save
    puts "new post by #{new_entry.name} was created"
  end
end

