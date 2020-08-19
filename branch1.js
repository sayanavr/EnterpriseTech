//Code by jugdeep kaur - C0753604
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
var myObj=[{b_id:"1001",name:"jugdeep kaur", loc_id:"901"},
            {b_id:"1002",name:"sakshi jain", loc_id:"902"},
            {b_id:"1003",name:"mani", loc_id:"903"},
            {b_id:"1004",name:"sagun", loc_id:"904"},
            {b_id:"1005",name:"george", loc_id:"905"}];
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("branch");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted rows!");
    });
    client.close();
});