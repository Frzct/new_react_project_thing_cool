import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

let Client
let MainDB
let uri = process.env.MONGO_CONNECTION

const Collections = {}

export async function Initialize(){

    /*console.log("connect attempt")
    Client = new MongoClient( process.env.MONGO_CONNECTION )
    await Client.connect()
    
    console.log('connect success')
    //
    MainDB = Client.db('Main')
    MainDB.command({ping: 1})
    
    console.log("Connected to MongoDB")*/

    if (!Client) {
        if (!uri) throw new Error('MONGO_CONNECTION env variable not set!');
        console.log('connect attempt');
        Client = new MongoClient(uri);
    }  

    if (!MainDB) {
        try {
            await Client.connect();
            MainDB = Client.db('Main');
            await MainDB.command({ ping: 1 });
            console.log('Connected to MongoDB');

        } catch (err) {
            console.error('MongoDB connection error:', err); // <--- ADD THIS LINE
            throw err;
        }
    }

}

export async function fetchFromCollections(CollectionName){
    await Initialize()

    if (!Collections[CollectionName]) {
        Collections[CollectionName] = MainDB.collection(CollectionName)
    }
    return Collections[CollectionName]
}

//
