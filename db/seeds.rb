# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all

demouser = User.create(email:'demo@user', password: 'password')

user1= User.create(email: 'test@123', password: 'password')
user2= User.create(email: 'test@312', password: 'password')
user3= User.create(email: 'test@231', password: 'password')
user4= User.create(email: 'test@321', password: 'password')
user5= User.create(email: 'test@456', password: 'password')
user6= User.create(email: 'test@654', password: 'password')
user7= User.create(email: 'test@465', password: 'password')

