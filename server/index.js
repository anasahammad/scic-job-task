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
      const sort = req?.query.sort;
      const search = req?.query.search || '';
      const page = parseInt(req?.query.page  || 1);
      const limit = parseInt(req?.query.limit)
      const brand = req.query.brands;
      const categories = req.query.categories;
      const priceRanges = req.query.priceRanges;
      let query = {}
      if(brand) query.brand = brand;
      if(categories) query.category = categories;
      if (priceRanges) {
        const [minPrice, maxPrice] = priceRanges.split('-').map(Number);
        query.price = { $gte: minPrice, $lte: maxPrice };
      }
      
      if(search){
        query.productName = {$regex: search, $options: 'i'}
      }
      
      let sortOptions = {}
      if (sort) {
        if (sort === 'priceLowToHigh') {
          sortOptions = { price: 1 };
        } else if (sort === 'priceHighToLow') {
          sortOptions = { price: -1 };
        } else if (sort === 'newest') {
          sortOptions = { creationTime: -1 }; // Assuming newest means descending order
        } else {
          sortOptions = { name: 1 };
        }
      }
      const products =  await productsCollection.find(query).sort(sortOptions).skip((page - 1) * limit).limit(limit).toArray();

      const totalDocuments = await productsCollection.countDocuments()
      res.json({
        products,
        totalDocuments,
        
      })
    })

    // app.get('/count', async(req, res)=>{
    //   const count = await 
    //   res.send({count})
    // })
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