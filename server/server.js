const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');


const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017/';
const dbName = 'product_db';
const collectionName = 'products';

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    console.log("Connected successfully to MongoDB");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    
    app.use(express.static(path.join(__dirname, 'client')));
    

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
F Vx
    });

    app.get('/chat', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'chat.html'));

    });
    app.get('/checkout', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'checkout.html'));
    });


    app.get('/products', (req, res) => {
        collection.find({}).toArray((err, result) => {
            if (err) throw err;
            res.json(result);
        });
    });

   
    app.delete('/products', (req, res) => {
        collection.deleteMany({}, (err, result) => {
            if (err) throw err;
            res.json({ message: 'All products deleted', result });
        });
    });

    app.get('/product-image', (req, res) => {
        const productName = req.query.productName;
        const imageURL = products[productName];
        if (imageURL) {
            res.json({ imageURL });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    });

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
app.use(express.static('client'));