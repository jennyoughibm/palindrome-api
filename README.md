# Palindrome API
The palindrome REST API can be used to verify if a message submitted by play is palindromes and store the plays' score in an in-memory db.
---

## Getting started

### Prerequisites
At minimum you will need to have node installed. You will need docker as well if you choose to run this in a docker container.


## Docker
### 1. Docker build
```
docker build . -t palindromeapi:latest
```
### 2. Docker deployment
```
docker run -d -it palindromeapi -e "base_URL=localhost" --name palindrome_api
```
This will run the server with the default port of 8080.

## Development Environment
## 1. Install packages
```
npm install
```
## 2. Build the code
```
npm run build
```
### 3. Launch the apis
To serve at the default 8080 port:
```
npm run local-serve
```

### Browse the swagger page of the api documentation
The full API swagger page gets generated for all definitions. You can navigate to the swagger page after the server is running:
```
http://localhost:8080/swagger
```

## Testing
This project comes with tests for the APIs (node).

### Running API node tests
```
jest
```


