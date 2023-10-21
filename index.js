const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

mongoose.connect(process.env.CONNECT_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const quoteSchema = new mongoose.Schema({
    quote: {
      type: String,
      required: true
    }
  });

  const Quote = mongoose.model('Quote', quoteSchema);

const port = 5000; 
const app = express();

// Quote route
app.get('/api', (req, res) => {
    Quote.find({}).then(function(quote){
   res.json(quote);
    }).catch(function(err){
        res.status(404).json({message: err.message})
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
