import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('Database is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbname: 'contribute_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true,

        console.log('Database connected')
    } catch (error) {
        console.log(error);
    }
}