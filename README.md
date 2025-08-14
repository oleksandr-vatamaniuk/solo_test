# Todo Batch Caching Application

This is a React application designed to demonstrate and implement a batch request fetching mechanism with client-side caching. It allows you to fetch a range of Todo items from `jsonplaceholder.typicode.com/todos/` efficiently, leveraging caching to reduce redundant API calls and improve performance.

---

## Features

* **Batch Request Handling**: Fetch a sequential range of Todo items in a single operation.
* **Client-Side Caching**: Automatically caches fetched Todo items, serving subsequent requests for the same item from the cache rather than re-fetching from the API.
* **Performance Tracking**: Displays the time taken to fetch each batch, highlighting the benefits of caching.
* **Real-time Progress**: Shows the current request progress within a batch.
* **Batch Management**: Ability to view and delete previously fetched batches.

---

## Technologies Used

* **React**: For building the user interface.
* **JavaScript (ES6+)**: Core programming language.
* **HTML & CSS**: For application structure and styling.

---

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed.

* [Node.js (includes npm)](https://nodejs.org/en/download/)

### Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
    *(Assuming you would provide the source code in a repository)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## Running the Application

After installation, you can start the development server.

```bash
npm start