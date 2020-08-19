//Code by jugdeep kaur - C0753604
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
var myObj=[{job_id:"101",name:"jugdeep kaur", salary:"10000"},
            {job_id:"102",name:"sakshi jain", salary:"9000"},
            {job_id:"103",name:"mani", salary:"8500"},
            {job_id:"104",name:"sagun", salary:"8200"},
            {job_id:"105",name:"george", salary:"8000"}];
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("jobs");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted rows!");
    });
    client.close();
});