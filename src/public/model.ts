import mongoose from "mongoose";
export const VehicleSchema = new mongoose.Schema({
  LicensePlateNumner: { type: String, maxlength: 25, unique: true },
  ManufactureName: { type: String, maxlength: 25 },
  Model: { type: String, maxlength: 10, unique: true },
  fuelType: { type: String, maxlength: 25 },
  OwnerName: { type: String, maxlength: 25 },
  rc_Status: { type: Boolean, unique: true },
  vehicleColor: { type: String, maxlength: 25 },
  RegistrationDate: { type: String, maxlength: 25 },
  InsuranceUpto: { type: String, maxlength: 25 },
  fitnessUpto: { type: String, maxlength: 25 },
  roadtaxUpto: { type: String, maxlength: 25 },
});
module.exports = mongoose.model("VehicleModel", VehicleSchema);
