const admin = require("firebase-admin");
 

const serviceAccount = require("./chatbot-backend-3912c-firebase-adminsdk-6hvqf-461b7c7ede.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chatbot-backend-3912c-default-rtdb.firebaseio.com",
});

const db = admin.database();
const auth = admin.auth();

module.exports = {
  db: db,
  auth: auth,
};
