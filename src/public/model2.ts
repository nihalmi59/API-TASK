import mongoose from "mongoose";
export const ViolationSchema = new mongoose.Schema({
  LicensePlateNumner: { type: String, maxlength: 25, unique: true },
  ViolationType: { type: String, maxlength: 25 },
  Status: { type: String, maxlength: 10, unique: true },
  date: { type: String, maxlength: 25 },
  time: { type: String, maxlength: 25 },
  location: { type: String, maxlength: 25 },
  Videourl: { type: String },
});
module.exports = mongoose.model("ViolationModel", ViolationSchema);
