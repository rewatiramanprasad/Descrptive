# Descrptive
 ## Please follow the below instruction to run the project in local
- clone the project
- ``` git@github.com:rewatiramanprasad/Descrptive.git ```
- go inside the directory
- ``` cd Descrptive/```
- you will find the 3 directory such as Client, server, pythonServer
## 1. first run the server 
- go inside the server directory
- ``` cd server/ ```
- install the all dependencies
- ```npm install ```
- run the dev server
- ``` npm run dev  ```
## 2.  Run the client
- Open another terminal
- ``` cd Descrptive/client ```
- install the all dependencies
- ```npm install ```
- run the dev server
- ``` npm run dev  ```
## 3. Run the pythonServer
- Open another PowerShell
- ``` cd Descrptive/pythonServer ```
- create the virtual environment
- ```python -m venv venv```
- activate the environment
- ``` .\venv\Scripts\activate```
- install the dependencies
- ``` pip install fastapi pytest uvicorn ```
- ``` pip install -r requirements.txt ```
- for run the server
- ``` uvicorn main:app --reload ```
- for run the test
- ```pytest ```
-  happy hacking
