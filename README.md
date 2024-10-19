
# Compensation Case Management System

## Table of Contents
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Database Schema](#database-schema)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview
The **Compensation Case Management System** is designed to streamline the process of handling compensation claims for disrupted flights. It allows administrators and legal teams to manage claims, documents, disruptions, and compensation cases in an efficient manner. The system integrates user authentication, compensation calculations, and flight information management.

This project involves both a backend powered by Spring Boot and Java, and a frontend built using Angular. The backend manages compensation cases, disruption details, reservations, and PDF generation for official documents.

### Backend Subfolders:
- **controller/**: Handles HTTP requests and routes them to the appropriate services.
- **model/**: Contains Java classes that represent entities such as compensation cases, users, and reservations.
- **repository/**: Defines repositories for data access using Spring Data JPA.
- **security/**: Handles authentication (JWT) and user roles.
- **service/**: Implements the business logic, such as managing compensation cases and handling reservations.

### Frontend Subfolders:
- **app/**: Contains the core logic of the Angular app, including components for login, case management, and PDF handling.
- **case-form-page/**: Manages the form where users can submit compensation case information.
- **caselist/**: Lists all compensation cases.

## Features
- **Compensation Case Management**: Allows the legal team to handle compensation cases based on disruptions, airline motives, and more.
- **Flight Disruption Tracking**: Keeps records of flight information, disruptions, and reservation details.
- **PDF Generation**: Automatically generates and stores compensation-related documents in PDF format.
- **User Authentication and Role Management**: Secure user management system, including roles and permissions.
- **REST API**: Backend services exposed via RESTful endpoints, enabling frontend communication.

## Database Schema
The system uses a MySQL database to manage the data. Below are the key tables:
- **user**: Stores user information, including roles and account status.
- **reservation**: Holds flight reservation details.
- **flight_info**: Contains flight-specific data such as departure, destination, and disruption flags.
- **passenger_details**: Stores passenger data.
- **disruption**: Manages disruption types and incidents related to the flight.
- **compensation_case**: Central table for storing case information and linking related data.
- **generated_pdf**: Stores PDF documents associated with cases.
- **document**: Manages additional document types and associated data.

### SQL Schema Overview:
- **user**: Manages users and roles.
- **reservation**: Stores flight reservations and links to airport.
- **flight_info**: Tracks detailed flight information.
- **passenger_details**: Manages personal information for passengers.
- **disruption**: Contains details about flight disruptions, such as cancellation type and disruption options.
- **compensation_case**: Central table for managing compensation cases with links to all related entities.
- **comment**: Allows users to add comments to cases for better tracking.
- **generated_pdf** and **document**: Store files related to cases.

## Technologies Used
- **Backend**: Spring Boot, Java, Spring Data JPA, JWT for security, Maven for dependency management.
- **Frontend**: Angular, HTML, SCSS, TypeScript.
- **Database**: MySQL with tables for users, reservations, flight disruptions, compensation cases, and documents.
- **Docker**: Containerization for backend services.

## Installation
1. Clone the repository:
   git clone https://github.com/MToader01

2. Navigate to the backend directory and run Maven to build the project.
3. Set up the MySQL database with the provided SQL schema in init.sql.
4. Run the backend server.
5. Navigate to the frontend directory and run the Angular app.

## Usage
Once the system is set up, you can:
- Log in with admin or user credentials.
- Manage flight disruption and compensation cases.
- Generate PDFs for compensation claims.
- Add comments to cases and update case statuses.

## Contributing
If you would like to contribute, please fork the repository and submit a pull request with your changes. Ensure your code adheres to the contribution guidelines.

## License
This project is licensed under the MIT License.

## Contact
Developed by Marcel Toader Păștina.
You can reach me via [LinkedIn](https://www.linkedin.com/in/marcel-pastina-b83504290/) or email at pastina.marcel.toader@gmail.com.
