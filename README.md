# Guard Gram

Welcome to Guard Gram! Guard Gram is a security tool designed to detect and analyze Instagram profiles to determine their authenticity. It uses machine learning models to identify potential fake accounts based on various attributes. This guide will help you get set up and running on your local machine.

## Prerequisites

Before you start, you will need to install the following software:

1. **Node.js**:
   - Download and install Node.js from the official website: [Node.js Download](https://nodejs.org/en/download/)
   - Follow the installation instructions for your operating system.

2. **Python**:
   - Download and install Python from the official website: [Python Download](https://www.python.org/downloads/)
   - Follow the installation instructions for your operating system.
   - Remember to add this to your Environment Variables refer this video if you are not familiar with the process https://www.youtube.com/watch?v=gb9e3m98avk


## Installation

### Clone the Repository

First, clone the repository to your local machine using Git. Open your command line interface (CLI) and run the following command:

```bash
git clone https://github.com/your-username/Guard-Gram.git
cd Guard-Gram
```
### Install Python Dependencies:
```bash
pip install -r requirements.txt
```
yet if you encounter any package missing error messages you can install that package using 
```bash
pip install <Package name>
```

**Ensure you have set up the backend as described above.**

Run the Training Script:

```bash
python train.py
```

### Start the Backend Server:
```bash
python app.py
```
This server will start on http://localhost:5000.

## Frontend Setup
Navigate to the Frontend Directory:
```bash
cd ../frontend
```
Install Node Modules:
```bash
npm install
```
Start the Frontend Server:
```bash
npm run dev
```
This will open the frontend in your default web browser at http://localhost:3000.
