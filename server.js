const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")

const routes = require("./routes")
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);


// Send every other request to the React app
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test", {
  useNewUrlParser: true,
  function(err){
    if(err) {
      throw err;
    }
    console.log("Mongoose connection successful")
    
  }
});
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



