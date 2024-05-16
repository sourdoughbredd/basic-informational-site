# Basic Informational Site

This project is a simple informational website with multiple pages including Home, About, and Contact Me. It serves as an introduction to backend design with Node.js without any backend frameworks.

## Description

The Basic Informational Site is a simple backend server for a web page. It includes separate HTML files for different pages and utilizes basic web technologies such as HTML and JavaScript. The site is served by a Node.js HTTP server which handles requests and serves the appropriate HTML files, or a 404 error page if the requested file is not found.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Contact Information](#contact-information)

## Features

- Basic HTTP server setup using Node.js to serve static files
- Home, About, and Contact pages
- 404 error page for handling non-existent routes

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sourdoughbredd/basic-informational-site.git
   ```
2. Navigate to the project directory:
   ```sh
   cd basic-informational-site
   ```
3. Start the server:
   ```sh
   node index.js
   ```
4. Open `http://localhost:8080` in your preferred web browser.

## Usage

1. Run `node index.js` to start the server.
2. Open `http://localhost:8080` to view the home page.
3. Navigate to a valid route (`/`, `/about`, `/contact- me`)
4. The `/404.html` page will be displayed for any invalid routes.

## Tech Stack

- HTML
- JavaScript
- Node.js

## License

This project is licensed under the ISC License.

## Contact Information

For any questions or suggestions, please contact Brett Bussell at [bwbussell24@gmail.com](mailto:bwbussell24@gmail.com).
