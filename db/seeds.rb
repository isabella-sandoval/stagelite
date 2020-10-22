# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all

demouser = User.create!(email:'demo@user', password: 'password')

user1= User.create(email: 'test@123', password: 'password')
user2= User.create(email: 'test@312', password: 'password')
user3= User.create(email: 'test@231', password: 'password')
user4= User.create(email: 'test@321', password: 'password')
user5= User.create(email: 'test@456', password: 'password')
user6= User.create(email: 'test@654', password: 'password')
user7= User.create(email: 'test@465', password: 'password')



Event.destroy_all


event1= Event.create!(
    title: 'Halloween Night',
    venue: 'Larimer Lounge',
    date: Date.new(2020, 10, 31), 
    time: Time.new(2021, 4, 1, 0, 0), 
    
    address: '2721 Larimer St, Denver, CO 80205',
    latitude: 39.760040,
    longitude: -104.983940,
    
    capacity: 50,
    price: 20,
    age_restriction: true,
    ticket_link: 'https://www.stubhub.com/beach-boys-tickets/performer/1584/',
)

event1.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img1.jpg"),
                           filename: "img1.jpg") 




event2= Event.create!(
    title: 'Post Covid Dance Party',
    venue: 'The Bluebird',
    date: Date.new(2021, 2, 15), 
    time: Time.new(2021, 6, 3, 5, 0), 
    
    address: '3317 E Colfax Ave, Denver, CO 80206',
    latitude: 39.740330,
    longitude: -104.948380,
    
    capacity: 100,
    price: 35,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)

event2.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img2.jpg"),
                           filename: "img2.jpg") 


