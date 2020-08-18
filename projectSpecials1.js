//Code by Sayana Veliyil Renny - C0753753
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
var myObj=[{s_id:"S005",s_name:"Chocolatey Days",item_id:"M003",quantity:2,special_price:3},
            {s_id:"S006",s_name:"Fundae",item_id:"M006",quantity:2,special_price:3},
            {s_id:"S007",s_name:"Chills",item_id:"M007",quantity:2,special_price:3}];
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("specials");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted rows!");
    });
    client.close();
});
