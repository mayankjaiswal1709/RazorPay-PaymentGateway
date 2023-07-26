import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb is coonected`);
    } catch (error) {
        console.log(error)
    }


}
