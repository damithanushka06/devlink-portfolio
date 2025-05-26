# DevLink - Developer Portfolio

DevLink is a clean and modular personal portfolio web application built with Angular. It provides developers with a user-friendly interface to showcase their skills, projects, blogs, and contact information in one place.

The project uses Angular’s standalone components and lazy-loaded feature modules to keep the codebase scalable and maintainable. The design focuses on simplicity, responsiveness, and easy navigation, allowing developers to highlight their professional profile effectively.

The portfolio includes sections such as Home, Projects, Skills, Blog, and Contact, with reusable UI components like header, sidebar, and footer for consistent styling and layout.

## Project Structure

The app is organized with a feature-based folder structure, promoting separation of concerns and ease of development:


src/
├── app/
│ ├── core/ # Shared services and models
│ ├── shared/ # Shared UI components like header, footer, sidebar
│ ├── features/ # Feature modules: home, projects, skills, blog, contact
│ ├── app.component.ts # Root component
│ ├── app.routes.ts # Application routes
│ └── app.config.ts # App configuration with routing providers
└── assets/ # Images, icons, and static files


## Key Features

- Angular standalone components for easier setup and improved modularity
- Lazy loading of feature modules for optimized performance
- Responsive UI with SCSS styling
- GitHub API integration to dynamically fetch and display projects (optional)
- Routing with guards and modular route definitions
- Simple contact form integration

## Third-Party Libraries

This project uses the following external libraries:

- Angular Router (for navigation and lazy loading)
- Angular Common (for common directives and pipes)
- SCSS for styling and layout

You can extend this by adding libraries like RxJS, Angular Material, or form validation libraries as needed.

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Use `ng serve` to run the app locally
4. Open `http://localhost:4200` in your browser

## Purpose

DevLink is intended to help developers build a professional online presence with a customizable portfolio that highlights their coding skills and projects. It’s ideal for job seekers, freelancers, and open source contributors.

---

This project is a solid foundation for anyone looking to showcase their work professionally while practicing Angular best practices.
