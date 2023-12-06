# Why Streamline?

## Streamline: Empowering Your To-Do List Experience

In a world overwhelmed with online tools riddled with advertisements and lacking essential features, **Streamline** steps in to simplify and elevate the way you manage your tasks. Crafted with precision and care powered by React + Vite, **Streamline** is more than just a to-do list application - it's your dedicated productivity companion designed to simplify your daily tasks.

## The Vision

**Streamline** is our tribute to efficiency and simplicity. We are redefining task management by offering a seamless and intuitive platform that places control back in your hands as the user.

## Key Features

- **Effortless Task Creation**: Add tasks to your to-do list seamlessly, empowering you to organize your day effortlessly.
- **Flexible Task Updates**: Edit and update your tasks on the go. Tailor your to-do list to match your evolving priorities.
- **Clear Task Visualisation**: Easily view and manage your tasks, keeping your to-do list neat and comprehensible at all times.
- **Swift Task Deletion**: Remove completed or redundant tasks swiftly, decluttering your list and keeping your focus sharp.
- **Smart Task Tagging**: Categorise tasks with tags for better organisation and quick identification.

## Your Streamlined Experience

We have fused functionality with a sophisticated user interface to create a smooth experience.

### Screenshots

**Streamline** isn't just about managing tasks; it's about reclaiming control of your time. Embrace a tool built to simplify your day-to-day, allowing you to focus on what truly matters.

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

Code Commits for Collaboration:

Teamwork: Placed a strong emphasis on working together during testing and code commits.

Mutual Support: In order to maintain productivity, the team sometimes programmed in pairs when someone's environment (such as VS Code) experienced technical difficulties.
By working in pairs to solve coding problems or carry out testing tasks, paired programming allowed for continuous development and avoided setbacks.

Shared Responsibilities: Made sure that every team member participated and fufilled their reponsibilities. When completing the testing process, particularly in situations where a specific team member found it difficult to commit code directly we joined forced on one team members sigular branch to commit code changes. 

Knowledge Transfer and Documentation: Enabled team members to share ideas, solutions, and code fragments by means of cooperative documentation, guaranteeing a shared understanding and knowledge base.

Effect on Workforce Efficiency: 

Maintaining Workflow: In spite of individual technical difficulties, teamwork techniques like partnered programming made sure there were few hiccups.

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

Continuous Integration (CI):

Tools: GitHub Actions

Process Overview: 
Automated Testing: Trigger some automated tests. 
Code Quality Checks: Run linters, unit tests, and integration tests and smoke tests.
Deployment Automation: Deploy the application based on defined triggers (successful tests, specific branches).

Pipeline Components:
Testing Stage: Execute comprehensive test suites (unit, integration, end-to-end) on virtual environments.
Quality Checks: Ensure adherence to coding standards, security checks, and dependency vulnerabilities.
Deployment Stage: Automate deployment to staging/production environments based on predefined conditions (Passing tests, Specific branch).

CI Pipeline Standardisation:

Defined Workflow: Establish a standardised workflow from code changes to deployment.
Version Control Integration: Link CI pipelines to specific branches for some cases of automated testing and deployment based on version control triggers.
Approval Processes: Implement approval mechanisms through git reviews when individuals pushed code for certain final deployment stages, ensuring manual confirmation before production deployment.


# Standards

# Performance and Accessibility Audit


