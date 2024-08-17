# Fullstack E-commerce Website

## Overview
This is a fullstack single-page e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse, search, filter, categorize, and sort products. The application also includes user authentication using Google and Email/Password via Firebase.

## Features
- **Product Management:**
  - Displays product details including Name, Image, Description, Price, Category, Ratings, and Creation Date/Time.
  - Database contains over 40 dummy products.
  
- **Pagination:**
  - Efficient product loading with pagination on the backend and frontend.
  - Navigation buttons for Next and Previous pages.
  
- **Search:**
  - Search functionality based on product name.
  
- **Categorization:**
  - Filters products by Brand Name, Category Name, and Price Range.
  - Allows the application of multiple filters simultaneously.
  
- **Sorting:**
  - Sorting by Price (Low to High, High to Low) and Date Added (Newest First).
  
- **Authentication:**
  - Google Authentication via Firebase.
  - Email and Password Authentication via Firebase.
  
- **Responsive Design:**
  - Mobile-first design ensuring full responsiveness.
  - Consistent UI with fixed-size product cards.
  
- **UI Components:**
  - Includes a Navbar with the website name/logo and relevant routes.
  - Footer with necessary information and links.

## Project Setup

### Frontend

1. **Navigate to the frontend directory:**
   ```bash
   cd client
2. **Install Dependency:**
  ```npm install

3. **Start the development server:**
  ```npm run dev

### Frontend
1. **Navigate to the backend directory:**
   cd server
  
2. **Install dependencies:**
  ```npm install
3. **Environment Variables:**
  Create a .env file in the server directory and add the following:
  PORT=5000
  
  PORT=5000
DB_USER=your_db_user
DB_PASS=your_db_password
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id

4. **Start the backend server:**
   ```npm run start


