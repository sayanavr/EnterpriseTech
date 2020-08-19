//Code by Jugdeep kaur - C0753604
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
var myObj=[{emp_id:"1",name:"jugdeep kaur", job_id:"101",b_id:"1001"},
            {emp_id:"2",name:"sakshi jain", job_id:"102",b_id:"1002"},
            {emp_id:"3",name:"mani", job_id:"103",b_id:"1003"},
            {emp_id:"4",name:"sagun", job_id:"104",b_id:"1004"},
            {emp_id:"5",name:"george", job_id:"105",b_id:"1005"}];
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("employees");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted rows!");
    });
    client.close();
});