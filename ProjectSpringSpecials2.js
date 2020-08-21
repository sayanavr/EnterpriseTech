//Name:Sakshi Jain, Student ID:C0753352

var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
client.connect((err, db) => {
    if (err) {
        console.log("It cannot be connected to db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("SpringSpecials");
    var criteria={s_id:"S982"};
    collection.deleteOne(criteria, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }
        console.log("1 document deleted successfully..!!!");
    });
    client.close();
});