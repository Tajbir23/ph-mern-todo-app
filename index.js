
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

const uri = "mongodb+srv://tajbir:rjnfmlBHt7toSTTr@cluster0.g1xrt1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = await client.db('users');
    const collection = await database.collection('users');

    app.post('/save', async(req, res) => {
        const data = req.body
        console.log(data);

        const result = await collection.insertOne(data)

        res.send(result)
    })

    app.get('/users', async(req, res) => {
      const cursor = await collection.find();
      const data = await cursor.toArray();
      res.send(data);

    })

    app.put('/users/update/:id' , async(req, res) => {
      const {id} = req.params
      const data = req.body
      console.log(id)
      const filter = {_id: new ObjectId(id)};

      const options = { upsert: true };
      // console.log(filter)
      const result = await collection.updateOne(filter, {$set: data}, options);
      res.send(result);
    })

    app.delete('/users/delete/:id', async(req, res) => {
      const {id} = req.params
      const query = {_id: new ObjectId(id)};

      const result = await collection.deleteOne(query)

      if(result.deletedCount === 1){
        res.send('deleted successfully')
      }else{
        res.send('failed to delete')
      }
    })
  } finally {
    
  }
}
run().catch(console.log);


app.listen(port, () => console.log(`server is running at http://localhost:${port}`))