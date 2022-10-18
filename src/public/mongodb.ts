import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";
const databaseName = "vehicleDB";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(databaseName);
  return db.collection("VehicleModel");
  return db.collection("ViolationModel");
}
module.exports = dbConnect;
