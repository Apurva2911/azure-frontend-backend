

## 🚀 Azure DevOps Demo: Frontend & Backend

This repository contains a simple Full-Stack application designed for deployment on **Azure App Services**. It consists of a vanilla JavaScript frontend and a native Node.js backend.

### 🏗️ Project Structure

* `index.html`: The main entry point for the frontend application.
* `script.js`: Handles the logic for fetching data from the backend API.
* `server.js`: A lightweight Node.js backend using the native `http` module.
* `package.json`: Defines the backend start command (`node server.js`).

### ⚙️ Features

* **Frontend**: A simple UI with a button that triggers an asynchronous `fetch` call to the backend.
* **Backend**: Exposes a JSON API at the `/api/hello` endpoint.
* **Dynamic Response**: The backend returns a greeting message and a high-precision ISO timestamp.

### 🚀 Deployment Details

1. **Frontend URL**: `https://devops-frontend-demo-c8d3ghame4bbcga5.centralindia-01.azurewebsites.net/`
2. **Backend URL**: `https://devops-backend-demo-hdcab8asa3bwewaz.centralindia-01.azurewebsites.net/`
3. **API Endpoint**: `/api/hello`

### 🛠️ Local Setup

1. Clone the repository.
2. To run the backend:
```bash
node server.js

```


*The server will start on port 3000 unless a `PORT` environment variable is provided.*
3. Open `index.html` in your browser to view the frontend.

### ⚠️ Important Configuration

* **CORS**: Ensure that the Backend App Service in Azure has the Frontend URL added to its **CORS** settings to allow cross-origin requests.
* **API URL**: The `script.js` file must point to the specific Azure Backend URL generated during deployment.

---
