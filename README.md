# Predict Pollution using time-series analysis 

This repository includes the back and front end for a project that focuses on gathering, predicting, and showing environmental data to the user.

## About this project

This project aims to integrate time-series analysis, anomaly detection, and REST API frameworks using Python and React.

### Back End



### Front End

## Features

- **REST API**: Flask sends data to the front end.
- **SARIMAX**: forecasting algorithm for time-dependent data.
- **Isolation Forest**: used to identify outliers.

## Installation

1. Clone the repo

   `
   git clone https://github.com/alexiacismaru/predict-pollution.git
   `
   
2. Install dependencies

  - Backend:
  
    `
    pip install -r requirements.txt
    `
  
  - Frontend:
  
    `
    npm install
    npm run
    ` 

3. Run the project
  - Frontend:
  
    `
    npm run dev
    `
  
  - Backend:
  
    `
    python main.py
    `

## Technologies used

- React: library made for user interfaces.
- Python: used to clean and predict data.
- Flask: Python library used to build the API.
- SARIMAX: a time-series forecasting algorithm that considers past values and external factors.
- Isolation Forest Model: anomaly detection model that splits the data into trees to identify abnormal values.
- NPM: a package manager for Node.js packages, or modules.

## License

Created by Alexia Cismaru.
