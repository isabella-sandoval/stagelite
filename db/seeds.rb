# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Ticket.destroy_all
User.destroy_all

demouser = User.create!(email:'demo@user', password: 'password')

user1= User.create(email: 'test@123', password: 'password')
user2= User.create(email: 'test@312', password: 'password')
user3= User.create(email: 'test@231', password: 'password')
user4= User.create(email: 'test@321', password: 'password')
user5= User.create(email: 'test@456', password: 'password')
user6= User.create(email: 'test@654', password: 'password')
user7= User.create(email: 'test@465', password: 'password')


Genre.destroy_all

genre1 = Genre.create(title: 'Rock')
genre2 = Genre.create(title: 'Funk')
genre3 = Genre.create(title: 'Disco')
genre4 = Genre.create(title: 'Pop')
genre5 = Genre.create(title: 'Electronic')

Event.destroy_all


event1= Event.create!(
    organizer_id: user1.id,
    title: 'Halloween Night',
    genre_id: genre1.id,
    venue: 'Larimer Lounge',
    date: Date.new(2020, 10, 31), 
    time: Time.new(2020, 10, 1, 0, 0), 
    
    address: '2721 Larimer St, Denver, CO 80205',
    latitude: 39.760040,
    longitude: -104.983940,
    
    capacity: 50,
    quantity: 0,
    at_capacity: false,
    price: 20,
    age_restriction: true,
    ticket_link: 'https://www.stubhub.com/beach-boys-tickets/performer/1584/',
)

event1.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img1.jpg"),
                           filename: "img1.jpg") 





event2= Event.create!(
    organizer_id: user2.id,
    title: 'Post Covid Dance Party',
    genre_id: genre2.id,
    venue: 'The Empty Bottle',
    date: Date.new(2021,2,10), 
    time: Time.new(2021, 2, 10, 3, 0), 
    
    address: '1035 N Western Ave, Chicago, IL 60622',
    latitude: 39.740330,
    longitude: -104.948380,
    
    capacity: 100,
    quantity: 0,
    at_capacity: false,
    price: 35,
    age_restriction: true,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)

event2.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img2.jpg"),
                           filename: "img2.jpg") 



                           
event3= Event.create!(
    organizer_id: user3.id,
    title: 'Spooky Things Happening',
    genre_id: genre3.id,
    venue: 'The Mint',
    date: Date.new(2020,10,20), 
    time: Time.new(2020, 10, 20, 4, 0), 
    
    address: '6010 W Pico Blvd, Los Angeles, CA 90035',
    latitude: 33.740330,
    longitude: -108.945380,
    
    capacity: 15,
    quantity: 0,
    at_capacity: false,
    price: 50,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)

event3.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img3.jpg"),
                           filename: "img3.jpg") 


event4= Event.create!(
    organizer_id: user4.id,
    title: 'Funky Town',
    genre_id: genre2.id,
    venue: 'The Satellite',
    date: Date.new(2021,11,2), 
    time: Time.new(2021, 11, 2, 5, 0),
    
    address: '1717 Silver Lake Blvd, Los Angeles, CA 90026',
    latitude: 39.740330,
    longitude: -104.930380,
    
    capacity: 200,
    quantity: 0,
    at_capacity: false,
    price: 60,
    age_restriction: true,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event4.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img4.jpg"),
                           filename: "img3.jpg") 



event5= Event.create!(
    organizer_id: user5.id,
    title: 'We can Gather Again Party!',
    genre_id: genre5.id,
    venue: 'The Pinkbird',
    date: Date.new(2021,3,10), 
    time: Time.new(2021, 3, 10, 3, 0),
    
    address: '3317 E Colfax Ave, Denver, CO 80206',
    latitude: 41.740330,
    longitude: -87.94830,
    
    capacity: 1000,
    quantity: 0,
    at_capacity: false,
    price: 35,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)

event5.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img5.jpg"),
                           filename: "img5.jpg") 



event6= Event.create!(
    organizer_id: user6.id,
    title: 'Get Down Tonight',
    genre_id: genre2.id,
    venue: 'The Hi Hat',
    date: Date.new(2020,12,15), 
    time: Time.new(2020, 12, 15, 6, 0),
    
    address: '5043 York Blvd, Los Angeles, CA 90042',
    latitude: 39.740560,
    longitude: -104.998380,
    
    capacity: 100,
    quantity: 0,
    at_capacity: false,
    price: 35,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)

event6.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img6.jpg"),
                           filename: "img6.jpg") 

event7= Event.create!(
    organizer_id: user7.id,
    title: 'Beasts Of Burden Night',
    genre_id: genre4.id,
    venue: 'The Echo',
    date: Date.new(2021, 2, 15), 
    time: Time.new(2021, 2, 15, 5, 0), 
    
    address: '1822 Sunset Blvd, Los Angeles, CA 90026',
    latitude: 39.740370,
    longitude: -104.948340,
    
    capacity: 600,
    quantity: 0,
    at_capacity: false,
    price: 60,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)

event7.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img7.jpg"),
                           filename: "img7.jpg") 



event8= Event.create!(
    organizer_id: user1.id,
    title: 'Dancing with Myself (and others, now)',
    genre_id: genre3.id,
    venue: 'Echoplex',
    date: Date.new(2021, 6, 15), 
    time: Time.new(2021, 6, 15, 5, 0), 
    
    address: '1154 Glendale Blvd, Los Angeles, CA 90026',
    latitude: 39.740330,
    longitude: -104.948380,
    
    capacity: 1000,
    quantity: 0,
    at_capacity: false,
    price: 35,
    age_restriction: true,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)                           
event8.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img8.jpg"),
                           filename: "img8.jpg") 

event9= Event.create!(
    organizer_id: user2.id,
    title: 'Party Like Its no Longer 2020',
    genre_id: genre1.id,
    venue: 'Resident',
    date: Date.new(2021, 1, 1), 
    time: Time.new(2021, 1, 1, 0, 0), 
    
    address: '428 S Hewitt St, Los Angeles, CA 90013',
    latitude: 39.740260,
    longitude: -104.948780,
    
    capacity: 500,
    quantity: 0,
    at_capacity: false,
    price: 20,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event9.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img9.jpg"),
                           filename: "img9.jpg") 

event10= Event.create!(
    organizer_id: user3.id,
    title: 'Lets Dance with Somebody',
    genre_id: genre5.id,
    venue: 'Larimer Lounge',
    date: Date.new(2021, 4, 15), 
    time: Time.new(2021, 4, 15, 5, 0), 
    
    address: '2721 Larimer St, Denver, CO 80205',
    latitude: 43.740330,
    longitude: -104.944580,
    
    capacity: 1000,
    quantity: 0,
    at_capacity: false,
    price: 10,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event10.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img10.jpg"),
                           filename: "img10.jpg") 

event11= Event.create!(
    organizer_id: user4.id,
    title: 'Dancing in the Dark Night',
    genre_id: genre4.id,
    venue: 'Seventh Circle Music Collective',
    date: Date.new(2021, 6, 15), 
    time: Time.new(2021, 6, 15, 4, 0), 
    
    address: '2935 W 7th Ave, Denver, CO 80204',
    latitude: 41.742330,
    longitude: -104.947380,
    
    capacity: 200,
    quantity: 0,
    at_capacity: false,
    price: 150,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event11.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img11.jpg"),
                           filename: "img11.jpg") 


event12= Event.create!(
    organizer_id: user5.id,
    title: 'Getting Up Offa That Thing',
    genre_id: genre2.id,
    venue: 'Summit',
    date: Date.new(2021,2,10), 
    time: Time.new(2021, 2, 10, 3, 0),
    
    address: '1902 Blake St, Denver, CO 80202',
    latitude: 39.740330,
    longitude: -104.948380,
    
    capacity: 2000,
    quantity: 0,
    at_capacity: false,
    price: 25,
    age_restriction: true,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event12.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img12.jpg"),
                           filename: "img12.jpg") 

event13= Event.create!(
    organizer_id: user6.id,
    title: 'Time After Time',
    genre_id: genre3.id,
    venue: 'Your Moms House',
    date: Date.new(2021, 6, 15), 
    time: Time.new(2021, 6, 15, 5, 0), 
    
    address: '608 E 13th Ave, Denver, CO 80203',
    latitude: 39.740330,
    longitude: -104.948380,
    
    capacity: 1000,
    quantity: 0,
    at_capacity: false,
    price: 50,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event13.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img13.jpg"),
                           filename: "img13.jpg") 

event14= Event.create!(
    organizer_id: user7.id,
    title: 'End of the World as We Know It Bash',
    genre_id: genre1.id,
    venue: 'Cervantes',
    date: Date.new(2020, 12, 28), 
    time: Time.new(2020, 12, 28, 6, 0), 
    
    address: '2637 Welton St, Denver, CO 80205',
    latitude: 40.834330,
    longitude: -102.948380,
    
    capacity: 750,
    quantity: 0,
    at_capacity: false,
    price: 20,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)                           
event14.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img14.jpg"),
                           filename: "img14.jpg") 


event15= Event.create!(
    organizer_id: user1.id,
    title: 'Love Is a Battlefield Party',
    genre_id: genre2.id,
    venue: 'Hermans Hideaway',
    date: Date.new(2021, 4, 14), 
    time: Time.new(2021, 4, 14, 3, 0), 
    
    address: '1578 S Broadway, Denver, CO 80210',
    latitude: 41.740390,
    longitude: -104.948380,
    
    capacity: 300,
    quantity: 0,
    at_capacity: false,
    price: 50,
    age_restriction: true,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event15.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img15.jpg"),
                           filename: "img15.jpg") 
 
event16= Event.create!(
    organizer_id: user2.id,
    title: 'Super Freak Night',
    genre_id: genre3.id,
    venue: 'Mercury Cafe',
    date: Date.new(2021, 5, 15), 
    time: Time.new(2021, 5, 15, 7, 0), 
    
    address: '2199 California St, Denver, CO 80205',
    latitude: 40.840330,
    longitude: -102.948780,
    
    capacity: 900,
    quantity: 0,
    at_capacity: false,
    price: 40,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event16.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img16.jpg"),
                           filename: "img16.jpg") 

event17= Event.create!(
    organizer_id: user3.id,
    title: 'Lets go Crazy Night',
    genre_id: genre4.id,
    venue: 'The Independent',
    date: Date.new(2021, 3, 20), 
    time: Time.new(2021, 3, 20, 11, 0), 
    
    address: '628 Divisadero St, San Francisco, CA 94117',
    latitude: 40.740130,
    longitude: -102.948380,
    
    capacity: 100,
    quantity: 0,
    at_capacity: false,
    price: 10,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event17.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img17.jpg"),
                           filename: "img17.jpg") 



event19= Event.create!(
    organizer_id: user4.id,
    title: 'Post Covid Celebration',
    genre_id: genre4.id,
    venue: 'Teragram Ballroom',
    date: Date.new(2021, 2, 2), 
    time: Time.new(2021, 2, 2, 7, 0), 
    
    address: '1234 W 7th St, Los Angeles, CA 90017',
    latitude: 39.740330,
    longitude: -104.948380,
    
    capacity: 500,
    quantity: 0,
    at_capacity: false,
    price: 20,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event19.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img19.jpg"),
                           filename: "img19.jpg") 


event20= Event.create!(
    organizer_id: user5.id,
    title: 'Wear your Rasberry Beret',
    genre_id: genre5.id,
    venue: 'Brick & Mortar Music Hall',
    date: Date.new(2021, 1, 12), 
    time: Time.new(2021, 1, 12, 5, 0), 
    
    address: '1710 Mission St, San Francisco, CA 94103',
    latitude: 45.723330,
    longitude: -104.948380,
    
    capacity: 100,
    quantity: 0,
    at_capacity: false,
    price: 35,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event20.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img20.jpg"),
                           filename: "img20.jpg") 

event21= Event.create!(
    organizer_id: user6.id,
    title: '90s Costume Party',
    genre_id: genre1.id,
    venue: 'Boom Boom Room',
    date: Date.new(2020, 10, 30), 
    time: Time.new(2020, 10, 30, 5, 0), 
    
    address: '1601 Fillmore St, San Francisco, CA 94115',
    latitude: 31.740900,
    longitude: -104.948380,
    
    capacity: 700,
    quantity: 0,
    at_capacity: false,
    price: 80,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)

event21.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img21.jpg"),
                           filename: "img21.jpg") 


event22= Event.create!(
    organizer_id: user7.id,
    title: 'Night of the Dead',
    genre_id: genre2.id,
    venue: 'Bootleg Theater',
    date: Date.new(2020, 11, 2), 
    time: Time.new(2020, 11, 2, 9, 0), 
    
    address: '2220 Beverly Blvd, Los Angeles, CA 90057',
    latitude: 50.743233,
    longitude: -101.942380,
    
    capacity: 1000,
    quantity: 0,
    at_capacity: false,
    price: 20,
    age_restriction: true,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event22.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img22.jpg"),
                           filename: "img22.jpg") 
  
event23= Event.create!(
    organizer_id: user1.id,
    title: 'Lets Groove Tonight',
    genre_id: genre3.id,
    venue: 'Troubadour',
    date: Date.new(2021, 2, 14), 
    time: Time.new(2021, 2, 14, 5, 0), 
    
    address: '9081 N Santa Monica Blvd, West Hollywood, CA 90069',
    latitude: 41.740330,
    longitude: -90.949480,
    
    capacity: 450,
    quantity: 0,
    at_capacity: false,
    price: 45,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event23.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img23.jpg"),
                           filename: "img23.jpg") 

event24= Event.create!(
    organizer_id: user2.id,
    title: 'Wear your Billie Jeans Night',
    genre_id: genre4.id,
    venue: 'Chameleon Lounge',
    date: Date.new(2021, 6, 15), 
    time: Time.new(2021, 6, 15, 5, 0), 
    
    address: '1667 Massachusetts Ave, Cambridge, MA 02138',
    latitude: 37.740330,
    longitude: -122.338380,
    
    capacity: 400,
    quantity: 0,
    at_capacity: false,
    price: 10,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)

event24.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img24.jpg"),
                           filename: "img24.jpg") 

event25= Event.create!(
    organizer_id: user3.id,
    title: 'Day of Dead Celebration',
    genre_id: genre5.id,
    venue: 'The Regency Ballroom',
    date: Date.new(2020, 11, 1), 
    time: Time.new(2020, 11, 1, 7, 0), 
    
    address: '1300 Van Ness Ave, San Francisco, CA 94109',
    latitude: 39.740330,
    longitude: -104.948380,
    
    capacity: 300,
    quantity: 0,
    at_capacity: false,
    price: 30,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event25.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img25.jpg"),
                           filename: "img25.jpg") 


event26= Event.create!(
    organizer_id: user4.id,
    title: 'Lets Go Crazy',
    genre_id: genre1.id,
    venue: 'Wallys Cafe',
    date: Date.new(2021, 4, 5), 
    time: Time.new(2021, 4, 5, 7, 0), 
    
    address: '427 Massachusetts Ave, Boston, MA 02118',
    latitude: 37.740330,
    longitude: -122.948380,
    
    capacity: 2000,
    quantity: 0,
    at_capacity: false,
    price: 70,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event26.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img26.jpg"),
                           filename: "img26.jpg") 


event27= Event.create!(
    organizer_id: user5.id,
    title: 'Dancing Queen Evening',
    genre_id: genre2.id,
    venue: 'Blue Rocks Park and Amphitheatre',
    date: Date.new(2021, 2, 2), 
    time: Time.new(2021, 2, 2, 4, 0), 
    
    address: '18300 W Alameda Pkwy, Morrison, CO 80465',
    latitude: 39.740330,
    longitude: -104.948380,
    
    capacity: 100,
    quantity: 0,
    at_capacity: false,
    price: 35,
    age_restriction: false,
    ticket_link: 'https://www.bluebirdtheater.net/events/detail/391563',
)
event27.photo.attach(io: open("https://stagelite-aa-dev.s3-us-west-1.amazonaws.com/img27.jpg"),
                           filename: "img27.jpg") 



                           

                      