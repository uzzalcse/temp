

create a hotel

POST http://localhost:3000/api/hotel
Content-Type: application/json

{
  "title": "Luxury Ocean Resort",
  "description": "A beautiful beachfront resort with stunning ocean views",
  "guestCount": 4,
  "bedroomCount": 2,
  "bathroomCount": 2,
  "amenities": [
    "wifi",
    "pool",
    "spa",
    "beach access",
    "room service"
  ],
  "host": {
    "name": "John Smith",
    "email": "john.smith@resort.com"
  },
  "address": "123 Ocean Drive, Miami Beach, FL 33139",
  "location": {
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "rooms": [
    {
      "hotelSlug": "luxury-ocean-resort",
      "roomSlug": "ocean-view-suite",
      "roomImage": "",
      "roomTitle": "Ocean View Suite",
      "bedroomCount": 1
    },
    {
      "hotelSlug": "luxury-ocean-resort",
      "roomSlug": "presidential-suite",
      "roomImage": "",
      "roomTitle": "Presidential Suite",
      "bedroomCount": 2
    }
  ]
}

2. Get Hotel by ID (get)

GET http://localhost:3000/api/hotel/{{hotel_id}}


3. get all hotels

GET http://localhost:3000/api/hotels


4. update hotel(put)

PUT http://localhost:3000/api/hotel/{{hotel_id}}
Content-Type: application/json

{
  "title": "Updated Luxury Ocean Resort",
  "description": "An updated description for our beautiful beachfront resort",
  "amenities": [
    "wifi",
    "pool",
    "spa",
    "beach access",
    "room service",
    "gym"
  ]
}


5. upload images(post)

POST http://localhost:3000/api/images
Content-Type: multipart/form-data

// Form Data:
hotelId: {{hotel_id}}
images: [select files]


//for the thunder client

For the image upload in Thunder Client:

Set request type to POST
Go to "Body" tab
Select "Form-Data"
Add field "hotelId" with the hotel ID
Add field "images" and select file type, then choose image files