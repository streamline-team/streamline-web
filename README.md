<div align="center">
 
![image](https://github.com/streamline-team/streamline-web/assets/92785142/506db121-6f77-4b50-a9aa-2b296b2a2dc8)

</div>

# Why Streamline? - Project Description

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

## :trophy: Team Description/Members

- **Bruno Silva - Back End Development (25% contribution):**
  - Responsible for building the server-side logic, database management, and core functionality of the to-do list.
  - Setting up tools, environments to outline the project build for the team. 
  - Contributes 25% effort to the project's development.

- **Rebeca Williams - Half Front End Testing + Half Back End Testing (25% contribution):**
  - Tasked with creating and executing tests to ensure the reliability and functionality of the back-end code.
  - Responsible for testing the user interface, interactions, and overall user experience of the application.
  - Contributes 25% effort to ensuring the robustness of the interface and application.

- **Safiya Behanzin - Half Front End Testing + Half Back End Testing (25% contribution):**
  - Responsible for testing the user interface, interactions, and overall user experience of the application.
  - Tasked with creating and executing tests to ensure the reliability and functionality of the back-end code.
  - Contributes 25% effort to ensuring a smooth and bug-free interface and application.

- **Deividas Dapkus - Front End Development (25% contribution):**
  - In charge of designing and implementing the visual components and client-side functionalities UI interface.
  - Contributes 25% effort to crafting an intuitive and responsive front-end experience.

## :toolbox: Tools Used

🖌️ UI Design 

### Figma
The use of figma allows us as a team to simultaneously collaborate when building the design for our to do list application. Figma allowed us as a team to create intital designs and modify eachothers ideas to build a UI that everyone in the team agrees on. This includes various color schemes, logos, icons and overall layout.
![image](https://github.com/streamline-team/streamline-web/assets/92785142/26f5ab6c-b161-4578-bbb6-19b915aac248)

### Click here for our [Figma](https://www.figma.com/file/INXgbKcbkvXGGuLRbstJqM/Untitled?type=design&node-id=49%3A19&mode=design&t=xfOFnfn8JzfBgMjh-1). 

 🖥️ Development
 
 ### Version Control
 - Git: Code repository used for tracking and merging changes made in the code

 ### Frameworks and Libraries
 - React: JS Library used for user interaction development
 - Drizzle ORM: Used for Object Relational Mapping which allows the frontend and backend to be connected
 - TypeScript: Javascript addition of static typing language

### User Authentication
- Kinde: Powerful  thrid party authentication tool that allows user authentication to be managed seamlessly

### A/B Testing of Initial Designs

When determining which design to se we completed some A/B testing with a small group of potential users. A/B testing is a way of comparing the original and modified design of the page. To complete this a [survey](https://docs.google.com/forms/d/e/1FAIpQLSdo-n_iW0iU2F9WOtguNcdoCoo2RHV4GrtEv7FK5GllVd65aA/viewform?usp=sf_link) was given to a group of potential users. They reviewed the 2 designs, voted for their favourite and gave comments. Using this feedback we were able to modify the design before deciding on our final UI design.
![image](https://github.com/streamline-team/streamline-web/assets/92785142/24abad49-1579-4a2b-a4f2-de2a53681cdb)


Drizzle ORM, Jest, Docker (mysql test instance), CI Github Actions automatically triggers tests
Mocks (authentication mocking)

testing script automatically starts docker network and mysql instance and terminates at the end

Each test is wrapped in its own transaction to ensure that tests are isolated effectively

Artifact registry -> where we are uploading a built docker container image of our backend to GCP
Cloud Run - Serverless service for running our node backend
Cloud SQL - mysql database instance in GCP
MENTIONG STAGING + PRODUCTION ENVIRONMENTS (both backend and frontend)

Version Control
- Git: Version control suystem for tracking changes in the codebase.
- GitHub: Hosting the repository and managing codebase collaboration.

Testing
Jest: JavaScript testing framework for unit, integration, mock, smoke and integration testing.
React testing library: Testing React components and their interactions.
Selenium: For End-to-End Testing

Test Code Coverage
Jest Coverage: To measure and report code coverage during testing.

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

## 📖 How To Run The Application

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



## 💼 Project Workflow

The team used Miro for tracking the project management to manage issues and use the kanban methodology and maintain a workflow where we could continuously improve, visualise our workflow on a regular basis and sort tasks in order of priority. 


# Project Workflow Methodology - Agile Approach

## Overview

The team project follows the Agile methodology, emphasising adaptability, collaboration, and iterative development. The workflow is structured around continuous feedback and frequent iterations to deliver a high-quality  Web appliction. 

## Agile Practices

### Sprints
- Time-boxed iterations (usually 1-4 weeks) for development and delivery of product increments.

### Backlog Refinement
- Ongoing process of reviewing, refining, and prioritising items in the product backlog.

### Daily Stand-ups
- Short meetings to discuss progress, impediments, and plan the day's work.
-Abapted time execution of these calls to accompdate everyones back to work schedules to maintain structure and productivity. 

### Sprint Review and Retorospective 
- Meeting at the end of a sprint to demonstrate completed work and gather feedback, suggest improvements and furure goals. Despite the time contraint a review on this application build it was a vital mandatory checkpoint. Feedback allows quick last minute adjustments to be implimentented that maximise project value, and keeping everyone aligned. 
- Reflective session to also identify what went well and areas for improvement.

#Three main sprint review/repo points: 

1. 
- Review point: Evaluation of Time Allocation and Task Completion
- Focus: More Analysing the accuracy of estimated task durations versus actual completion times for the sprint's user stories and tasks.
- Objective: Identified areas where time estimates deviated significantly, discuss reasons, and strategise improvements for better time allocation in subsequent sprints.

2.
- Review Point: User feedback Integrartion
- Focus: Showcase enhancements made based on user feedback collected from previous iterations or user testing sessions. 
- Objective: Highlight hpw user feedback influenced feature modifications or additions, fostering a user-centric approach and ensuring alignment with user needs. 

3.
- Review Point: More Key Performance Indecators needed, KPIs
- Focus: Display relevant metrics like user engagement, task completion rates, or performance benchmarks set for the sprint. 
- Objective: Discuss the achieved KPIs, their imlications on the streamlines success, and strategies to improve or maintain these metrics in subsequent sprints.


## Methodology Conclusion

Agile's flexibility and iterative design made it the best option for Streamline’s implementation. Agile, as opposed to Waterfall, accommodates our shortened project schedule by enabling regular feedback and modifications. It encourages teamwork and adapts to changing needs, which are essential in a rapid development. In contrast to Waterfall's linear structure, which lacks flexibility and waits feedback until project completion, its incremental delivery assures early benefit and mitigates risks. Because of its flexibility and constant refinement, agile is the best technique for quick and responsive development because it precisely matches our changing project needs. 


## Code Commits for Collaboration:

Teamwork: Placed a strong emphasis on working together during testing and code commits.

Mutual Support: In order to maintain productivity, the team sometimes programmed in pairs when someone's environment (such as VS Code) experienced technical difficulties.
By working in pairs to solve coding problems or carry out testing tasks, paired programming allowed for continuous development and avoided setbacks.

Shared Responsibilities: Made sure that every team member participated and fufilled their reponsibilities. When completing the testing process, particularly in situations where a specific team member found it difficult to commit code directly we joined forced on one team members sigular branch to commit code changes. 

Knowledge Transfer and Documentation: Enabled team members to share ideas, solutions, and code fragments by means of cooperative documentation, guaranteeing a shared understanding and knowledge base.

## Effect on Workforce Efficiency: 

Maintaining Workflow: In spite of individual technical difficulties, teamwork techniques like partnered programming made sure there were few hiccups.

## ☑️ Test Methodologies and Tools

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

## 💻 Coding Practices

For this project we needed to ensure good coding practices were in place so that we can produce good quaity software. The main goal is to make sure the code is consistent, readable and maintainable.

### Consistency 

- Managed by following a certain naming conventions, such as camelCasing in both the frontend and backend code

Front End camelCasing

![image](https://github.com/streamline-team/streamline-web/assets/92785142/164ad04f-37b7-4c18-84ba-ffc86fd9fa85)

Back End camelCasing

![image](https://github.com/streamline-team/streamline-web/assets/92785142/dce4b1a2-4dd9-44cc-9b97-6999fb88cb60)

### Naming Conventions

- Variables have been named in a way that is comprehensive and readable
- This makes it easy to understand what is going on in that block of code
- Having clear variable names makes the code easier to read and maintain

Front End Naming

![image](https://github.com/streamline-team/streamline-web/assets/92785142/1f0ab6a3-6e6f-402d-bda6-8daf9eddc8fa)


Back End Naming

![image](https://github.com/streamline-team/streamline-web/assets/92785142/8e821a9a-d341-4131-976f-9dd69220531f)

### Security

Throughout this project we had to keep security in mind. For this various actions were taken:

- Input Validation and Sanitisation to mitigate security vulnerabilities
- Dependency Scanning for known vulnerabilities and update them accordingly
- Authentication and Authorisation through the use of the Kinde tool is in place to safeguard user data and the applications functionality

## CI Pipeline

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


## ❗ Standards

- ESLint - Open Source tool that finds and fixes issues in the code. Works alongside the CI Pipeline. It finds and automatically fixes syntax errors and is highly customisable making it a powerful tool to keep  code consistent and maintainable.

![Screenshot 2023-12-06 at 14 42 26](https://github.com/streamline-team/streamline-web/assets/92785142/240fa26c-f3e6-471a-ab1e-d169261850b8)


## 🏃 Performance and Accessibility Audit
