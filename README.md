# LogIn/SignUp Admin Panel

## Project Overview
This project aims to build an admin panel that allows users to register, sign in, and manage their profiles. After login, the user will be directed to a dashboard displaying a welcome message with their name. The admin panel will also include a profile page where users can view their personal details.

## Technologies Used
- **Node.js**: Backend server
- **Express.js**: Web framework
- **EJS**: Templating engine
- **MongoDB/Mongoose**: Database for storing user data
- **Cookie-Parser**: To handle cookies for session management
- **Body-Parser**: To parse incoming request bodies
- **Bcrypt.js**: For password encryption

## Features
- **User Registration with encrypted passwords**
- **User Login with session management using cookies**
- **Personalized dashboard with a welcome message**
- **Profile page displaying user details**
- **MongoDB as the database for storing user information**

## Project Flow
1. **Registration Page**: 
   - Users will be able to register by providing their email, password, and other profile details.
   
2. **Login Page**: 
   - Users will log in using their credentials. Cookies will be set to manage the session.
   
3. **Dashboard Page**: 
   - Once logged in, users are redirected to a dashboard with a welcome message that includes their username.
   
4. **Profile Page**: 
   - Users can view their personal information on a profile page.

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB

### Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/nilesh-paradva/admin-panel-cookies-auth-node-js.git
   
2. Navigate into the project folder:
   ```bash
   cd login-signup-admin-panel

3. Install the dependencies:
   ```bash
   npm install
