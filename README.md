# hotel bookings

## Book Hotel

Use this API to book a space

`fetch("https://hotels-listing-server.horlamedhey.now.sh/api/users/${username}/book", { "method": "PUT", "headers": { "content-type": "application/json" }, "body": { "hotelId": "yourHotelId" } }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

## Fetch Hotel

Use this API to fetch an hotel.

`fetch("https://hotels-listing-server.horlamedhey.now.sh/api/hotels/${id}", { "method": "GET", "headers": {} }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

## Fetch User

Use this API to fetch a user.

`fetch("https://hotels-listing-server.horlamedhey.now.sh/api/users/${username}", { "method": "GET", "headers": {} }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

## Fetch Hotels

Use this API to fetch all hotels.

`fetch("https://hotels-listing-server.horlamedhey.now.sh/api/hotels", { "method": "GET", "headers": {} }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

## Fetch Users

Use this API to fetch all users.

`fetch("https://hotels-listing-server.horlamedhey.now.sh/api/users", { "method": "GET", "headers": {} }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

## Create Hotel

This API is meant for creating hotel.

`fetch("https://hotels-listing-server.horlamedhey.now.sh/api/hotels/create", { "method": "POST", "headers": { "content-type": "application/json" }, "body": { "id": "yourHotelId", "name": "yourHotelName", "city": "yourHotelLocation" } }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

## Create User

This API is meant for creating user.

`fetch("https://hotels-listing-server.horlamedhey.now.sh/api/users/create", { "method": "POST", "headers": { "content-type": "application/json" }, "body": { "username": "yourUserName" } }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`
