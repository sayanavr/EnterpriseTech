//Code by jugdeep kaur - C0753604
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("jobs");
    var criteria={job_id:"105"};
    collection.deleteOne(criteria, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }
        console.log("Deleted collection document");
    });
    client.close();
});