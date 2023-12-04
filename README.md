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

# Coding Practices

# CI Pipeline

# Standards

# Performance and Accessibility Audit