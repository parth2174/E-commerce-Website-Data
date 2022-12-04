let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8230;
//const mongoUrl = "mongodb://localhost:27017"
const mongoLiveUrl = "mongodb+srv://parthsheth:parth5196@cluster0.zi1ko.mongodb.net/EcommerceWebsiteData?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
const cors = require('cors');
//const token = "8fbf8tyyt87378";







//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res) => {
    res.send("Welcome to Express")
})


//Categories
/*app.get('/Categories',(req,res) => {
    if(req.query.token === token){
        db.collection('Categories').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Unauthorise')
    }
})*/

app.get('/Categories',(req,res) => {
    db.collection('Categories').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


app.get('/Mobiles/:id',(req,res) => {
    let mobileId = Number(req.params.id);
    //let id = req.params.id;
    //let id = Number(req.params.mobile_id);
    //db.collection('mobiles').find().toArray((err,result) => {  
    //let mobileId = mongo.ObjectId(req.params.id)
    //db.collection('Mobiles').find({_id:mobileId}).toArray((err,result) => {
        //if(err) throw err;

    db.collection('Mobiles').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


app.get ('/mobiles/',(req,res) => {
    let query = {};
    let brandId = Number(req.query.brand_id)
    let uniqueId = Number(req.query.unique_id)
    if(brandId){
        query = {brand_id:brandId}
    }else if(uniqueId){
        query = {unique_id:uniqueId}
    }

    db.collection('Mobiles').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/Products',(req,res) => {
    db.collection('Products').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/Mobiles',(req,res) => {
    db.collection('Mobiles').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})



// Connection with db
MongoClient.connect(mongoLiveUrl, (err, Client) => {
    if(err) console.log(`Error while connecting`);
    db = Client.db('EcommerceWebsiteData');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})


/*app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})*/ 
