//Name:Sakshi Jain, Student ID:C0753352

var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });

var myObj=[{s_id:"S982",s_name:"Frappe",item_id:"I460",quantity:5,special_price:9},
            {s_id:"S983",s_name:"Freak Shake",item_id:"I461",quantity:4,special_price:2},
            {s_id:"S984",s_name:"Lungo",item_id:"I462",quantity:3,special_price:4}];
client.connect((err, db) => {
    if (err) {
        console.log("It cannot be connected to db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("SpringSpecials");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted three documents!");
    });
    client.close();
});