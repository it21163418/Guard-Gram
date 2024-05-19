

### README.md

```markdown
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

3. **MongoDB**:
   - Download and install MongoDB from the official website: [MongoDB Download](https://www.mongodb.com/try/download/community)
   - Follow the installation instructions for your operating system.
   - Ensure MongoDB is running on your system.

## Installation

### Clone the Repository

First, clone the repository to your local machine using Git. Open your command line interface (CLI) and run the following command:

```bash
git clone https://github.com/your-username/Guard-Gram.git
cd Guard-Gram
```

### Backend Setup

1. **Navigate to the Backend Directory**:
   ```bash
   cd backend
   ```

2. **Create and Activate a Virtual Environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Python Dependencies**:
   - Install the required Python packages by running:
     ```bash
     pip install -r requirements.txt
     ```

4. **Run MongoDB**:
   - Ensure MongoDB is running. You can start MongoDB using the following command:
     ```bash
     mongod
     ```

5. **Start the Backend Server**:
   - Run the following command to start the backend server:
     ```bash
     python app.py
     ```

   - This server will start on `http://localhost:5000`.

### Frontend Setup

1. **Open a New CLI Window**:
   - Navigate to the frontend directory in a new CLI window:
     ```bash
     cd ../frontend
     ```

2. **Install Node Modules**:
   - Run the following command to install necessary Node modules:
     ```bash
     npm install
     ```

3. **Start the Frontend Server**:
   - To start the frontend part of the application, run:
     ```bash
     npm run dev
     ```

   - This will open the frontend in your default web browser at `http://localhost:3000`.

## Usage

To use Guard Gram, navigate to `http://localhost:3000` in your web browser after starting the frontend server. You can register as a new user and begin analyzing Instagram profiles.

## Training the Model

If you need to retrain the machine learning model, follow these steps:

1. **Ensure the Backend is Set Up**:
   - Ensure you have set up the backend as described above.

2. **Run the Training Script**:
   - Execute the training script to train the model with the provided dataset:
     ```bash
     python train.py
     ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.

```

### Detailed Steps for Installing Prerequisites

#### Installing Node.js

1. Visit the [Node.js Download page](https://nodejs.org/en/download/).
2. Download the installer for your operating system (Windows, macOS, or Linux).
3. Run the installer and follow the prompts.
4. To verify the installation, open a terminal (or Command Prompt on Windows) and run:
   ```bash
   node -v
   npm -v
   ```
   You should see the version numbers of Node.js and npm.

#### Installing Python

1. Visit the [Python Download page](https://www.python.org/downloads/).
2. Download the installer for your operating system.
3. Run the installer and make sure to check the box that says "Add Python to PATH".
4. Follow the prompts to complete the installation.
5. To verify the installation, open a terminal (or Command Prompt on Windows) and run:
   ```bash
   python --version
   pip --version
   ```
   You should see the version numbers of Python and pip.

#### Installing MongoDB

1. Visit the [MongoDB Download page](https://www.mongodb.com/try/download/community).
2. Download the installer for your operating system.
3. Run the installer and follow the prompts.
4. To start MongoDB, open a terminal (or Command Prompt on Windows) and run:
   ```bash
   mongod
   ```
   This will start the MongoDB server.

### Notes:
- Replace `"your-username"` with your actual GitHub username where the repository is hosted.
- Ensure the `requirements.txt` file for the backend includes all necessary Python libraries. Based on the provided files, it might look like this:
  ```plaintext
  Flask==2.0.1
  Flask-Cors==3.0.10
  joblib==1.0.1
  pandas==1.2.4
  scikit-learn==0.24.2
  ```

This `README.md` provides a detailed and user-friendly guide to setting up and running the Guard Gram application, ensuring that even users with no technical background can follow along. Adjustments may be needed based on the specific details and directory structure of your project.
