const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is the backend.');
});

// MongoDB setup
const uri = require("./config/constants").MONGOURI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Routes
const itemRouter = require('./routes/items');
app.use('/items', itemRouter);

// Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || require("./config/constants").PORT;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
