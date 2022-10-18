import express, { Express } from "express";
require("../public/config");
const Vehicle = require("../public/model");
const Violation = require("../public/Model2");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

//Vehicle api
app.post("/", async (req, resp) => {
  let data = new Vehicle(req.body);
  const result = await data.save();
  resp.send(result);
});

app.get("/", async (req, resp) => {
  let data = await Vehicle.find();
  resp.send(data);
});
app.get("/:id", async (req, resp) => {
  let data = await Vehicle.findById(req.params.id);
  resp.send(data);
});
app.delete("/:id", async (req, resp) => {
  let data = await Vehicle.findByIdAndDelete(req.params.id);
  resp.send(data);
});
app.put("/:id", async (req, resp) => {
  let data = await Vehicle.findOneAndUpdate(req.params.id, { $set: req.body });
  resp.send(data);
});
//Violation Api

app.post("/Post", async (req, resp) => {
  let data = new Violation(req.body);
  const result = await data.save();
  resp.send(result);
});

app.get("/get1", async (req, resp) => {
  let data = await Violation.find();
  resp.send(data);
});
app.delete("/delete/:id", async (req, resp) => {
  let data = await Violation.findByIdAndDelete(req.params.id);
  resp.send(data);
});
app.get("/get/:id", async (req, resp) => {
  let data = await Violation.findById(req.params.id);
  resp.send(data);
});
app.put("/put/:id", async (req, resp) => {
  let data = await Violation.findOneAndUpdate(req.params.id, { $set: req.body });
  resp.send(data);
});
app.listen(5001, () => {
  console.log("server.....");
});
