[issues-badge]: https://img.shields.io/github/issues/adaapp/testing-dec2021-team3.svg?style=for-the-badge
<div align="center">

<img width="200" height="200" alt="Screenshot 2023-12-06 at 18 39 1" src="https://github.com/streamline-team/streamline-web/assets/92785142/506db121-6f77-4b50-a9aa-2b296b2a2dc8">

<h1>Streamline</h1>

[![Coverage Status](https://coveralls.io/repos/github/streamline-team/streamline-services/badge.svg?branch=bruno/ci-implementation&t=qOJE22)](https://coveralls.io/github/streamline-team/streamline-services?branch=bruno/ci-implementation)

<img width="1827" alt="Screenshot 2023-12-06 at 18 39 1" src="https://github.com/streamline-team/streamline-web/assets/54673205/9ac4e030-2a5a-499d-9465-8387304d3514">

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

### Screenshots (Add images from the google doc)

**Streamline** isn't just about managing tasks; it's about reclaiming control of your time. Embrace a tool built to simplify your day-to-day, allowing you to focus on what truly matters.


## :trophy: Team Description/Members

- **Bruno Silva - Back End Development + README document (25% contribution):**
  - Responsible for building the server-side logic, database management, and core functionality of the to-do list.
  - Setting up tools, environments to outline the project build for the team. 
  - Contributes 25% effort to the project's development.

- **Rebeca Williams - Half Front End Testing + Half Back End Testing README document (25% contribution):**
  - Tasked with creating and executing tests to ensure the reliability and functionality of the back-end code.
  - Responsible for testing the user interface, interactions, and overall user experience of the application.
  - Contributes 25% effort to ensuring the robustness of the interface and application.

- **Safiya Behanzin - Half Front End Testing + Half Back End Testing + README document (25% contribution):**
  - Responsible for testing the user interface, interactions, and overall user experience of the application.
  - Tasked with creating and executing tests to ensure the reliability and functionality of the back-end code.
  - Contributes 25% effort to ensuring a smooth and bug-free interface and application.

- **Deividas Dapkus - Front End Development + README document (25% contribution):**
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

<img width="619" alt="Copy of KanbanBoard" src="https://github.com/streamline-team/streamline-web/assets/92785142/04f4e370-e938-4f19-aec0-4a33abaf7aa9">


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

### Three main sprint review/repo points: 

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

## Testing Approach
### TDD, Test-Driven Development

Our streamline project relies on the software requirements converted to test cases before software is fully developed. Software development is tracked by repeatedly testing the software against all test cases for each section of functionality for both Front-End and Backend. Selecting Test-Driven Development (TDD) is an ideal match for our project's objectives and schedule. The "test first" approach of TDD guarantees a stable codebase through ongoing functional validation. TDD's iterative cycle of creating tests before code helps us save time in our small 14-day project by enabling faster fixes, lowering total debugging time, and finding errors early. In our fast-paced development process, this approach increases code maintainability, modular design, and code reliability. Because of its methodical approach, TDD reduces the possibility of faults and delivers a more consistent and predictable result, which perfectly satisfies our deadline-driven demands for quality and efficiency.

## Testing Tools Used
### Front-End Testing: 
- Vitest and Selenium

These tools were carefully selected due to their capabilities in automating and stinulating user interactions, ensuring the functionality and usability of the web application across different browsers and environemts. Vitest offers quick snapshot testing, while selenium's versatility aids in end- to end testing, validating the user interface and experience with Streamline. 

###  Back-End Testing:
- Jest, Mocking and Own utilities

These test server-side functionalities, API endpoints and business logic. Jest provides a robust testing framework, while mocking and incorporating our own custom utilities assit in building controlled tesingenvironments and isolating specific elements for thorough and efficient testing of the back-end system.


## Testing Strategies
1. Unit Testing: Write comprehensive unit tests for individual functions and components to validate their behavior in the BackEnd and Front-end.
2. Integration Testing: Perform tests that verify the interaction between different elements and components to ensure the operate concurrently.
3. End-to-End Testing: Implement end-to-end tests to validate the entire flow of the application, mimicking real user scenarios for reliability.
4. Test Automation: Automate repetitive test cases reduce code duplication and improve overall manual testing execution. We have ensured all automated tests strategically run before deployemnt therefore pausing all code runs if tests are not achieved. 
5. Mock testings: creates simulated versions of external systems like our databases or APIs. This allows testing specific features without relying on the complete backend or external services, ensuring reliable functionality and efficient testing in different scenarios despite limited resources or dependencies.
6. Smoke testing: a smoke test is a basic, preliminary test that checks if the most critical functionalities of an application are working such as our task tagging and priority tagging features. It aims to verify that the application can perform essential tasks without encountering major issues.

## Testing Structure

We have formatted the tests so each route/feature has its own indextest.ts file which holds tests for the entire functionality for that complete route.  
i.e Schema folder holds:
- index.test.ts
- index.ts
- types.ts

This is mimicked for all folders and code functionality to ensure clear and well presented tests for review. 

![Screenshot 2023-12-06 at 12 07 10](https://github.com/streamline-team/streamline-web/assets/92785142/383e3e32-0d48-4e46-a3c4-2e24e41f71bb)


## Test Code Coverage
Jest Coverage: To measure and report code coverage during testing.
The Streamlines entire application achieves ... % code coverage. 

93% code coverage on the backend demonstrates that a significant portion of the codebase has been tested, confriming the applications stability. This minimises the likelihood of undiscovered bugs and ensures a more robust and trustworthy user experience.

![Screenshot 2023-12-06 at 18 13 33](https://github.com/streamline-team/streamline-web/assets/92785142/49bb59e4-24b6-4701-9331-c78bfaaa6ab8)

![Screenshot 2023-12-06 at 12 00 22](https://github.com/streamline-team/streamline-web/assets/92785142/21a88f8e-925f-4568-a1d2-8dcec44c8f69)

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

Continuous Integration (CI): 🧰 GitHub Actions

GitHub actions is used to automate the testing pipline whenever code is pushed. This means the team is able to create workflows that build and test every pull request in the repository. GitHub actions also allows for various code quality controls to be put into place by running linters, unit, integrtion ad smoke tests. It also means deployment can be automated based on triggers defined during setup.

Having defined workflows, version control integration and approval processes means there is standardisation in the CI Pipeline. The Pipeline can be broken into 3 components, the testnig stage, quality checks and deployment stage. Within the testing stage comprehensivve testing is executed on virtual environments. Quality checks ensure the code adheres to standards, security checks and dependecy vulnerabilities. Finally in the deployment stage automated deployment can occur to staging/production environments based on predefined conditions included the passing of tests and which branch the code is on.

![Screenshot 2023-12-06 at 12 01 16](https://github.com/streamline-team/streamline-web/assets/92785142/d964ca45-a041-4705-bed3-b49a8abdaa61)

![Screenshot 2023-12-06 at 19 45 29](https://github.com/streamline-team/streamline-web/assets/92785142/7900b18d-d0e8-4340-b564-1a2ec472ad84)

![Screenshot 2023-12-06 180740](https://github.com/streamline-team/streamline-web/assets/92785142/fdf705b9-a428-4f5b-b414-5ae28b9c9652)




## ❗ Standards

- IEEE 730 - Standard from the Institute of Electrical and Electronics Engineers that provides guidance on software quality management practices. For this project followed it when producing and collecting evidence to justify confidence in the quality of our software.
- ESLint - Open Source tool that finds and fixes issues in the code. Works alongside the CI Pipeline. It finds and automatically fixes syntax errors and is highly customisable making it a powerful tool to keep  code consistent and maintainable.

![Screenshot 2023-12-06 at 14 42 26](https://github.com/streamline-team/streamline-web/assets/92785142/240fa26c-f3e6-471a-ab1e-d169261850b8)


## 🏃 Performance and Accessibility Audit

When considering performance and accessibility we decided to use Google Lighthouse to generate a report that highlights the quality of our application. Lighthouse is an open-source tool thatis accessible through the development console in Google Chrome. The Lighthouse tool generated a report which contains a summary of the performance and accessibility of our application. Within the the report there are 4 metrics:

- Performance - Aggregation of how the page progressed, for example the loading speeds, time taken for loading frames and meaningful content
- Accessibility - Aggregation of how accessible the website is through captions, button names etc.
- Best Practices - Aggregation of practices that are seen as 'best'
- SEO - Aggregation of scores in features like the presence of titles and legible font sizes


The website has a performance rating of 92 which suggests there is some room for improvement but overall is in 'good shape' from a performance perspective. The main issue with highlighted wth performance is is a slow response on the largest contentful paint. This refers to how quickly the main content of the page is loaded. This is due the storing of tokens in the browsers storage for authentication. So although it has a slightly slow loading of the main content, it allows for some extra security and overall improvement to the way the user can interact with the application.

The accessibility rating of 82 shows that there is extra work required to make the applictaion more accessible. The comments in the accessibility review show that colours and fonts require changes. Mainly the contrast in background and foreground colours. Currently the application follows a basic colour scheme. Given the limited time for this project we were unable to include features like a light/dark mode switch and changes in text sizes. However given more time we would add these features in the next release to ensure tht the application is accessible to all. 

![Screenshot 2023-12-06 at 17 00 16](https://github.com/streamline-team/streamline-web/assets/92785142/1ac950ba-58be-4190-9b95-bb8a448c5461)

![Screenshot 2023-12-06 at 17 00 47](https://github.com/streamline-team/streamline-web/assets/92785142/23d58259-471d-4fe6-ba75-136fc3af6580)






