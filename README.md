LinkUp - Social Media App Backend
Welcome to the backend repository for LinkUp, a social media app where users can share their thoughts and engage with others. This backend application manages user authentication, authorization, posts, and user sessions.

Features
User Authentication & Authorization:

Passwords are securely hashed using bcrypt.
JWT (JSON Web Tokens) are used for secure authorization.
Session management is handled using cookies for a seamless login experience.
Posts Management:

Users can create, read, update, and delete posts, allowing them to share thoughts and updates.
Express HTTP Server:

Built with Express, a minimal and flexible Node.js web application framework.
MongoDB with Mongoose:

Uses MongoDB for data storage, with Mongoose for schema modeling and interaction.
Tech Stack
Node.js and Express - Backend runtime and server framework.
MongoDB - NoSQL database for storing user and post data.
Mongoose - ODM for MongoDB, enabling schema-based data modeling.
bcrypt - For password hashing.
JWT - For generating and verifying tokens for secure access.
Cookies - For session management during user login.
