import Bike from "../model/bike.model.js";

export const getBike = async(req, res) => {
    try {
        const bike = await Bike.find();
        res.status(200).json(bike);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};