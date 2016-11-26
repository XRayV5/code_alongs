# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


t1 = Talk.new()
t1.topic = "Handling Asycn"
t1.speaker = "Ray"
t1.sessionTime = "12:00 - 13:00"
t1.seats = 20
t1.save

t2 = Talk.new()
t2.topic = "Js Callbacks"
t2.speaker = "Ray.Jr"
t2.sessionTime = "13:30 - 14:00"
t2.seats = 15
t2.save

t3 = Talk.new()
t3.topic = "Web sockets"
t3.speaker = "Sir.Ray"
t3.sessionTime = "14:30 - 15:00"
t3.seats = 15
t3.save
