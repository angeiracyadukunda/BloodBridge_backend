Rwanda BloodBridge
Overview
Rwanda BloodBridge is a web application designed to streamline blood donation management across Rwanda. The platform allows donors to register, schedule blood donation appointments, and track their donation history. Hospitals can manage blood requests and track donations efficiently. The system also incentivizes frequent donors through rewards.

Features
Donor Registration: Allows donors to register with personal details, including blood type and location.
Appointment Scheduling: Donors can schedule and manage blood donation appointments.
Blood Request Management: Hospitals can create and manage blood requests based on need and urgency.
Donation Tracking: Track and manage donation history for donors.
Rewards System: Recognizes and rewards frequent donors.
Secure Authentication: User authentication with JWT (JSON Web Token) for secure access.
Input Validation and Error Handling: Robust validation and error management to ensure data integrity.
Technology Stack
Backend: Node.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
Mail Service: Nodemailer (for email notifications)
Testing Framework: Jest, Supertest


git clone https://github.com/your-username/rwanda-bloodbridge.git
cd rwanda-bloodbridge

npm install
npm start


Usage
Authentication
Register a new user:
Endpoint: POST /api/auth/register
Body: { names, bloodType, province, district, sector, cell, id, phoneNumber, preferredLanguage, KGL, age, password }
Login and get a token:
Endpoint: POST /api/auth/login
Body: { id, password }
Donor Management
Register a donor:
Endpoint: POST /api/donors
Body: { names, bloodType, province, district, sector, cell, id, phoneNumber, preferredLanguage, KGL, age, password }
Get donor information:
Endpoint: GET /api/donors/:id
Appointment Management
Create a new appointment:
Endpoint: POST /api/appointments
Body: { donorId, date, time, location }
Get all appointments:
Endpoint: GET /api/appointments
Request Management
Create a blood request:
Endpoint: POST /api/requests
Body: { bloodType, quantity, urgency }
Get all requests:
Endpoint: GET /api/requests
Update request status:
Endpoint: PUT /api/requests/:id
Body: { status }
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request. Ensure your changes are well-documented and include tests where applicable.

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any inquiries or feedback, please contact:

Your Name :Angelique Iracyadukunda
Email: angeiracyadukunda@gmail.com
LinkedIn: https://www.linkedin.com/in/angelique-iracyadukunda-437395294/
GitHub: https://github.com/angeiracyadukunda