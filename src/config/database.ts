import mongoose from "mongoose";
export const connectDatabase = async () => {
  try {
    const result = await mongoose.connect(`${process.env.URL_DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    if (!result) return;
    console.log("Connect databse is successfully");
  } catch (error) {
    throw error;
  }
};
