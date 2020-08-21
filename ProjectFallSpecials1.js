//Name:Sakshi Jain, Student ID:C0753352

var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });

var myObj=[{s_id:"F810",s_name:"Chocolate Bits",item_id:"I850",quantity:2,special_price:3},
            {s_id:"F811",s_name:"Coldbrew",item_id:"I851",quantity:4,special_price:9},
            {s_id:"F812",s_name:"Soft Serve",item_id:"I852",quantity:3,special_price:2}];
client.connect((err, db) => {
    if (err) {
        console.log("It cannot be connected to db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("FallSpecials");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted three documents!");
    });
    client.close();
});