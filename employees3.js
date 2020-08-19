//Code by Jugdeep kaur - C0753604
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("employees");
    var criteria={emp_id:"4"};
    var newObj={$set:{emp_id:"4",name:"saggun sharma", job_id:"105",b_id:"1005"}};
    collection.updateMany(criteria, newObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }
        console.log("Updated collection document");
    });
    client.close();
});