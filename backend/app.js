const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 4000;
const cors = require('cors');
const url = 'mongodb://localhost:27017/';
const dbName = 'hospitalityDb';
const client = new MongoClient(url, { useUnifiedTopology: true,useNewUrlParser: true });

app.use(cors());
app.get('/resort-details', async (req, res) => {
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('resort');
      
    
  
  // Find all documents in the collection
      const employees = await collection.find({}).toArray();
      // Respond with the list of employee documents in JSON format
      res.json(employees);
    } catch (e) {
      res.status(500).send('Error connecting to the database');
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  });
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });