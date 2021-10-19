const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBfkVuN54Q7Nk4g5LoJHB4PCh1QEC8oN5o",
  authDomain: "chatbot-backend-3912c.firebaseapp.com",
  projectId: "chatbot-backend-3912c",
  storageBucket: "chatbot-backend-3912c.appspot.com",
  dataBaseURL: "https://chatbot-backend-3912c-default-rtdb.firebaseio.com/",
  messagingSenderId: "1024934477804",
  appId: "1:1024934477804:web:a7409ec639e9ec7bff4ac9",
};

// Initialize Firebase
const instance = firebase.initializeApp(firebaseConfig);
module.exports = {
  instance: instance,
};
