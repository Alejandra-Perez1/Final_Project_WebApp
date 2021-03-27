"use strict";

const mongoose = require("mongoose"),
  User = require("./models/user");

mongoose.connect(
  "mongodb://localhost:27017/chitter_chatter",
  { useNewUrlParser: true }
);
mongoose.connection;

var contacts = [
    { name: {
        first: "Jason",
        last: "White"
        },
        email: "jasonwhite@gmail.com",
        password: "jasonPass",
        location: "Denver",
        biography: "I am a teacher"
    },
    { name: {
        first: "Jen",
        last: "Sterling"
        },
        email: "jensterling@gmail.com",
        password: "password123",
        location: "Texas",
        biography: "I am a art student"
    },
    { name: {
        first: "priya",
        last: "Madhok"
        },
        email: "priyamadhok@gmail.com",
        password: "password@12345",
        location: "India",
        biography: "I am a engineer"
    },
];

var commands = [];

contacts.forEach(c => {
  commands.push(
    User.create({
        name: {
            first: c.first,
            last: c.last
          },
          email: c.email,
          password: c.password,
          location: c.location,
          biography: c.biography
    })
  );
});

Promise.all(commands)
  .then(r => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(`ERROR: ${error}`);
  });
