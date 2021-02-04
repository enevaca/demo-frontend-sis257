import axios from "axios";

export default axios.create({
  baseURL: "https://backend-sis257.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vZWwiLCJjaGVrYyI6dHJ1ZSwiaWF0IjoxNjEyNDc5ODg0LCJleHAiOjE2MTI1NjYyODR9.CIwJbeCouGTZdpmcAzbzAIYehF1asU8pQeo2x8EUNtY"
  }
});
