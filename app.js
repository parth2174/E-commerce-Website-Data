let express = require('express');
let app = express();


let port = 8230;



let Categories = [
    {
        "id": "1",
        "category": "Fashion"
    },
    {
        "id": "2",
        "category": "Mobiles"
    },
    {
        "id": "3",
        "category": "Electronics"
    },
    {
        "id": "4",
        "category": "Appliances"
    }
]

let Products = [
    {
        "id": "1",
        "category": "Fashion",
        "category id": "1",
        "product name": "men's clothing",
        "size": "s, l, m, xl",
        "image": "https://i.ibb.co/pLRNmKj/T-shirt.jpg",
                 
    },
    {
        "id": "2",
        "category": "Fashion",
        "category id": "1",
        "product name": "women's clothing",
        "size": "s, l, m, xl",
        "image": "https://i.ibb.co/XLGVN5t/Dress.jpg"
                
                
    },
    {
        "id": "3",
        "category": "Fashion",
        "category id": "1",
        "product name": "men's footwear",
        "size": "6, 7, 8, 9, 10",
        "image": "https://i.ibb.co/gyT5003/shoes.jpg"
    },
    {
        "id": "4",
        "category": "Fashion",
        "category id": "1",
        "product name": "women's footwear",
        "size": "3, 4, 5, 6, 7, 8, 9",
        "image": "https://i.ibb.co/R4NrPP9/women-s-footwear.jpg"
    },
    {
        "id": "5",
        "category": "Mobiles",
        "category id": "2",
        "product name": "mobiles",
        "image": "https://i.ibb.co/3SxLzRj/Mobiles.png"
    },
    {
        "id": "6",
        "category": "Electronics",
        "category id": "3",
        "product name": "Laptop",
        "image": "https://i.ibb.co/ZS8MQT2/Laptops.jpg"
    },
    {
        "id": "7",
        "category": "Electronics",
        "category id": "3",
        "product name": "Home Theatres",
        "image": "https://i.ibb.co/bdKzzr5/Home-Theatres.jpg"
    },
    {
        "id": "8",
        "category": "Electronics",
        "category id": "3",
        "product name": "Soundbars",
        "image": "https://i.ibb.co/G00q3wX/Soundbars.jpg"
    },
    {
        "id": "9",
        "category": "Electronics",
        "category id": "3",
        "product name": "Smart Watches",
        "image": "https://i.ibb.co/FqwM6nL/smart-watch.jpg"
    },
    {
        "id": "10",
        "category": "Appliances",
        "category id": "4",
        "product name": "Air Conditioners",
        "image": "https://i.ibb.co/rvX4mHr/Air-Conditioners.jpg"
    },
    {
        "id": "11",
        "category": "Appliances",
        "category id": "4",
        "product name": "Refrigerators",
        "image": "https://i.ibb.co/XL2z0TB/Refrigerators.jpg"
    },
    {
        "id": "12",
        "category": "Appliances",
        "category id": "4",
        "product name": "Kitchen Appliances",
        "image": "https://i.ibb.co/dPyVjL9/microwave-oven.jpg"
                
    }
]


app.get('/',(req,res) => {
    res.send("Welcome to Express")
})

app.get('/Categories',(req,res) => {
    res.send(Categories)
})

app.get('/Products',(req,res) => {
    res.send(Products)
})


//Categories
/*app.get('/EcommerceWebsiteData',(req,res) => {
    if(req.query.token === token){
        db.collection('Categories').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Unauthorise')
    }
})



// Connection with db
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while connecting`);
    db = client.db('EcommerceWebsiteData');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})*/

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})