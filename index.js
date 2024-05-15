const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express(cors());

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', function(req, res){
    const componentFilePath = path.join(__dirname, 'pages/homePage.js');
  
  fs.readFile(componentFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading component file');
      return;
    }

    res.setHeader('Content-Type', 'text/javascript');
    res.send(data);
  });   
})

app.post('/coordinates', async (req, res) => {
  try {
    console.log(req.body)
    const address = req.body.address;
    if (!address) {
      return res.status(400).json({ error: 'Address is required' });
    }

    const apiKey = 'AIzaSyAj76ZZ1LFaj3k5my3MMKSd2lmd9zaYKOs';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    const response = await axios.get(url);
    const { results } = response.data;

    if (results.length === 0) {
      console.log("Google Error")
      return res.status(404).json({ error: 'Address not found' });
    }

    const coordinates = results[0].geometry.location;
    console.log(coordinates)
    return res.json(coordinates);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Server Error' });
  }
});

app.get('/getlatlong', function(req, res){
    res.send("You requested coordinates!")
})


app.listen(5000);

console.log("Running server")