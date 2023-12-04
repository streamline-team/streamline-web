# streamline-web
Streamline frontend built with &lt;3 on React + Vite

# Project Description

For this project a To Do List Application is being created. Our application will allow its users to create and manage a list of todo items.

The core functionality includes : 

[] Create a task to add to the todo list

[] Read tasks on the todo list 

[] Update tasks in the list

[] Delete tasks on the users todo list

*Include UI snapshots showing the above*

# Team Description

- Bruno Silva - Back End Development, % contribution
- Rebeca Williams - Back End Testing, % contribution
- Safiya Behanzin - Front End Testing, % contribution
- Deividas Dapkus  - Front End Development, % contribution

# Tools Used
Version Control
- Git: Version control suystem for tracking changes in the codebase.
- GitHub: Hosting the repository and managing codebase collaboration.

Testing
Jest: JavaScript testing framework for unit, integration, mock, smoke and integration testing.
React testing library: Testing React components and their interactions.
Selenium: For End-to-End Testing

Test Code Coverage
Jest Coverage: To measure and report code coverage during testing.

Framework/Libraries
React: JavaScript library for building user interaction.  
Drizzle: Tool for simplifying the integration of blockchain functionality.
TypeScript: Javascript addition of static typing language. 

Authentification
Kinde: Powerfull third party authenification tool that manages our users authentication seamlessly.

Linters

Project Management Tools

Performance and Accessibility Audit
Accessibility Testing: 

Database
PlanetScale: Database management system used for scalability and reliability.

Deployment 

CI/CD
GitHub Actions: Setting up workflows for automated testing, building and deployment. 

Other Tools/Services
Tailwind CSS: libraries for styling and UI components
Docker/Kubernetes: Containerisation and orchestration for deployment. 

Documentation
Markdown: Writing and formatting documentation, such as this README file.

Front End Packages and versions: 
        "@kinde-oss/kinde-auth-react": "^3.0.23",
        "@uiw/react-md-editor": "^4.0.1",
        "date-fns": "^2.30.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-feather": "^2.0.10",
        "react-router-dom": "^6.20.1",
        "use-local-storage-state": "^19.1.0"

# How To Run The Application

1. Clone the repository
2. create a .env file in the root directory and add the following variables
    - VITE_KINDE_CLIENT_ID=e4f2eb91e927409193df3165d6616a46
    - VITE_KINDE_DOMAIN=https://streamline-staging.eu.kinde.com
    - VITE_KINDE_REDIRECT_URI=http://localhost:3030
    - VITE_KINDE_LOGOUT_URI=http://localhost:3030
    - VITE_STREAMLINE_SERVICES_URL=http://localhost:8080
3. Run `npm install` to install all dependencies
4. Run `npm run dev` to start the application
5. Navigate to `localhost:3030` to view the application

For the backend to work you will need to clone the backend repository and follow the instructions in the README.md file

# Siplified steps for backend
1. Clone the repository
2. Run `npm install` to install all dependencies
3. Run `npm run watch` to start the application
4. docker-compose up -d to start the database



# Project Workflow

# Test Methodologies and Tools

Methodology
TDD, Test Driven Development

Our streamline project relies on the software requirements converted to test cases before software is fully developed. Software development is tracked by repeatedly testing the software against all test cases for each section of functionality for both Front-End and Backend. 

Testing Tools
Jest: JavaScript testing framework for unit, integration, mock, smoke and integration testing.
React testing library: Testing React components and their interactions.
Selenium: For End-to-End Testing

Testing Strategies
1. Unit Testing: Write comprehensive unit tests for individual functions and components to validate their behavior in the BackEnd and Front-end.
2. Integration Testing: Perform tests that verify the interaction between different elements and components to ensure the operate concurrently.
3. End-to-End Testing: Implement end-to-end tests to validate the entire flow of the application, mimicking real user scenarios for reliability.
4. Test Automation: Automate repetitive test cases reduce code duplication and improve overall manual testing execution. 

Test Code Coverage
Jest Coverage: To measure and report code coverage during testing.

# Coding Practices

Coding standards
1. Consistency: Follow a consistent coding style for naming conventions across the codebase to ensure readability and maintainability.
2. Comments and Documentation: Document code logic, functions, and complex algorithms to aid understanding and maintenance.
3. Modularity and Reusability: Encourage modular and reusable code components to minimise redundancy and promote scalability.

Version control
1. Git Workflow: To manage code changes, branches, and releases effectively through pushing code changes to the same Git repository.
2. Meaningful Commits: Make concise and descriptive commit messages that reflect the purpose of the changes made.

Security
1. Input Validation and Sanitisation: Implement strict practices to mitigate security vulnerabilities.
2. Dependency Scanning: Regularly scan dependencies for known vulnerabilities and update them accordingly.
3. Authentication and Authorisation: Ensure robust authentication through Kinde tool is in place to safeguard user data and application functionality.

# CI Pipeline

# Standards

# Performance and Accessibility Audit
