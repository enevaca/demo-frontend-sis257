import axios from "axios";

export default axios.create({
  baseURL: "https://backend-sis257.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vZWwiLCJjaGVrYyI6dHJ1ZSwiaWF0IjoxNjEyNDg0NjIyLCJleHAiOjE2MTM3ODA2MjJ9.El-HfP9xYyvC5VQkioFp76ebmh8Y5itln-fxC7tonYw"
  }
});
