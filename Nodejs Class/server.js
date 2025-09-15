const express = require("express");
const mongoose = require("mongoose");
const personRoute = require("./routes/personRoute");
const menuRoute = require("./routes/menuRoute");
const dotenv = require("dotenv");
const passport = require("passport");
const Person = require("./model/Person");
const LocalStrategy = require("passport-local").Strategy;

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse form data (urlencoded)
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("/user", personRoute);
app.use("/menu", menuRoute);

// passport.use(
//   new LocalStrategy(
//     async (username, password, done) => {
//       try {
//         const user = await Person.findOne({ username: username });
//         if (!user) {
//           return done(null, false, { message: "User not found" });
//         }

//         if (user.password === password) {
//           return done(null, user);
//         } else {
//           return done(null, false, { message: "Incorrect password" });
//         }
//       } catch (err) {
//         return done(err);
//       }
//     }
//   )
// );

// const logRequest = (req, res, next) => {
//   console.log(
//     `[${new Date().toLocaleString()}] Request made to ${req.originalUrl}`
//   );
//   next();
// };

const db_URL = process.env.DB_URL;
const mongoURL = "mongodb://127.0.0.1:27017/furyland";
// const mongoURL = db_URL;

main()
  .then((res) => {
    console.log(`Connection Successful`);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoURL);
}


app.get("/", (req, res) => {
  res.send("Welcome to our hotel!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
