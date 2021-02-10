import axios from "axios";

export default axios.create({
  //baseURL: "https://backend-sis257.herokuapp.com/api",
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vZWwiLCJjaGVrYyI6dHJ1ZSwiaWF0IjoxNjEyOTg4MjIwLCJleHAiOjE2MTQyODQyMjB9.xtDS_eiUOvyCgckRgy9Hdxhzt1eqQ8-lRbSOTYJUvIg"
  }
});
