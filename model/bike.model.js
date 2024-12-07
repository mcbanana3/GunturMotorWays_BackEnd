import mongoose from "mongoose";

const bikeSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    discount: Number,
    discountApplicable: Boolean,
    category: String,
    image: String,
});

const Bike = mongoose.model("Bike", bikeSchema);

export default Bike;