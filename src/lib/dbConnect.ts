import { promises } from "dns";
import mongoose, { mongo } from "mongoose";


type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Already connected to the database');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string || '', {})
        connection.isConnected = db.connections[0].readyState;

        console.log("DB connected Successfully")
        console.log(db.connections)

    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default dbConnect