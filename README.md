# hotel bookings

# Book Hotel

Use this API to book a space

`fetch("http://localhost:3000/api/users/${username}/book", { "method": "PUT", "headers": { "content-type": "application/json" }, "body": { "hotelId": "yourHotelId" } }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

# Fetch Hotel

Use this API to fetch an hotel.

`fetch("http://localhost:3000/api/hotels/${id}", { "method": "GET", "headers": {} }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

# Fetch User

Use this API to fetch a user.

`fetch("http://localhost:3000/api/users/${username}", { "method": "GET", "headers": {} }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

# Fetch Hotels

Use this API to fetch all hotels.

`fetch("http://localhost:3000/api/hotels", { "method": "GET", "headers": {} }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

# Fetch Users

Use this API to fetch all users.

`fetch("http://localhost:3000/api/users", { "method": "GET", "headers": {} }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

# Create Hotel

This API is meant for creating hotel.

`fetch("http://localhost:3000/api/hotels/create", { "method": "POST", "headers": { "content-type": "application/json" }, "body": { "id": "yourHotelId", "name": "yourHotelName", "city": "yourHotelLocation" } }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`

# Create User

This API is meant for creating user.

`fetch("http://localhost:3000/api/users/create", { "method": "POST", "headers": { "content-type": "application/json" }, "body": { "username": "yourUserName" } }) .then(response => { console.log(response); }) .catch(err => { console.log(err); });`
