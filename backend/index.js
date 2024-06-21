const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const Port = process.env.PORT;

app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

//! ChatBot Routes //!
const chatRoutes = require('./Routes/ChatBotRoutes')
app.use('/api', chatRoutes)
//! ChatBot Routes //!

//! Job Data Routes //!
const JobDataRoutes  = require('./Routes/JobDataRoutes');
app.use('/api',JobDataRoutes);
//! Job Data Routes //!

//! Job Application Routes //!
const JobApplicationRoute =  require('./Routes/JobApplication')
app.use('/api',JobApplicationRoute);
//! Job Application Routes //!

//! Job Application Routes //!
const ContactUsRoutes =  require('./Routes/ContactUsRoutes')
app.use('/api',ContactUsRoutes);
//! Job Application Routes //!

//! Job Application Routes //!
const DemoRoutes =  require('./Routes/DemoRoutes')
app.use('/api',DemoRoutes);
//! Job Application Routes //!


require("./Config/Config")
app.listen(Port, async () => {
  try {
    console.log(`SERVER STARED  : http://localhost:${Port}`);
  } catch (err) {
    console.log(`SOMETHING WENT WRONG : ${err}`);
  }
});
