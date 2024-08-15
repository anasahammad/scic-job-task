const express = require("express")
const app = express()
require('dotenv').config()
const cors = require("cors")
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.goboxhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    const db = await client.db("exclusive")
    const productsCollection = db.collection("products")

    app.get("/products", async(req, res)=>{
      const search = req?.query.search || '';
      let query = {}

      
      if(search){
        query.productName = {$regex: search, $options: 'i'}
      }
      
      const result = await productsCollection.find({productName:{$regex: search, $options: 'i'} }).toArray()
      res.send(result)
    })
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally { 
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", async(req, res)=>{
    res.send("The server is comming")
})

app.listen(port, ()=>{
    console.log(`The server is running from ${port}`)
})