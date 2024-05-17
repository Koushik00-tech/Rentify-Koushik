Rentify - Real Estate Rental Platform
Overview
Rentify is a web application designed to connect property owners (sellers) with potential tenants (buyers). The platform allows sellers to list their properties, manage their listings, and interact with interested buyers. Buyers can browse available properties, filter listings based on various criteria, and express interest in properties they like.

Tech Stack
Frontend: React, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose for ORM)
Application Features
Part I: Basic Application (Mandatory)
User Authentication

Users can register and log in.
Users can be either sellers or buyers.
Property Management for Sellers

Sellers can post properties with essential details (e.g., location, area, number of bedrooms, bathrooms, nearby amenities).
Sellers can view, update, and delete their posted properties.
Sellers can view all posted rental properties.
Property Browsing for Buyers

Buyers can browse all available properties.
Buyers can apply filters to narrow down property searches based on criteria such as location, number of bedrooms, etc.
Buyers can express interest in a property by clicking the "I'm Interested" button, which reveals the seller's details.
Part II: Add-On Features (Advanced)
Pagination and Form Validation

Implement pagination for property listings to enhance user experience.
Add form validation to ensure all required property details are entered correctly.
Enhanced Authentication

Require buyers to log in to view seller details.
Redirect unauthorized users attempting to access seller information to the login screen.
Like Feature

Add a "Like" button to each property.
Track and display the count of likes live.
Email Notifications

Send an email to the buyer with the seller's contact details when the "I'm Interested" button is clicked.
Notify the seller via email with the details of the interested buyer.
Setup Instructions
Prerequisites
Node.js
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/rentify.git
cd rentify
Install backend dependencies:

bash
Copy code
cd backend
npm install
Install frontend dependencies:

bash
Copy code
cd ../frontend
npm install
Configure environment variables:

Create a .env file in the backend directory with the following:
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
Start the backend server:

bash
Copy code
cd ../backend
npm start
Start the frontend server:

bash
Copy code
cd ../frontend
npm start
API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user.
Properties
GET /api/properties: Get all properties.
POST /api/properties: Create a new property (seller only).
GET /api/properties/:id: Get a specific property.
PUT /api/properties/:id: Update a property (seller only).
DELETE /api/properties/:id: Delete a property (seller only).
Likes
POST /api/properties/:id/like: Like a property.
Step-by-Step Guide
User Authentication
Register User: Create a registration form that sends a POST request to /api/auth/register with user details.
Login User: Create a login form that sends a POST request to /api/auth/login and store the received JWT token.
Property Management
Post Property: Create a form for sellers to enter property details and send a POST request to /api/properties.
View Properties: Display properties by fetching data from /api/properties.
Update/Delete Property: Provide options for sellers to update or delete their properties using PUT and DELETE requests.
Buyer Interactions
Filter Properties: Implement filtering logic on the frontend to allow buyers to narrow down property searches.
Express Interest: When a buyer clicks "I'm Interested", show seller details and send an email with seller and buyer contact information.
Advanced Features
Pagination: Implement server-side pagination and update the frontend to handle paginated data.
Form Validation: Use form validation libraries to ensure all required fields are correctly filled out.
Like Feature: Add a like button and handle likes using POST requests.
Email Notifications: Integrate an email service (e.g., Nodemailer) to send notifications when a buyer expresses interest.
GitHub Repository Structure
plaintext
Copy code
rentify/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── README.md
├── README.md
└── .gitignore
Conclusion
Rentify aims to streamline the process of finding rental properties and tenants. By implementing the basic and advanced features outlined above, the application will provide a robust platform for property rentals. Follow the setup instructions to get started with developing and deploying Rentify.





