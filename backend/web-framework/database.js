import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

let Client
let MainDB

const Collections = {}

export async function Initialize(){
    if (Client) return console.log("alr init")

    try {
        console.log("connect attempt")
        Client = new MongoClient( process.env.MONGO_CONNECTION )
        await Client.connect()
        
        console.log('connect success')
        //
        MainDB = Client.db('Main')
        MainDB.command({ping: 1})
        
        console.log("Connected to MongoDB")
    } catch (err) {
        await Client.close()
    }
}

export async function fetchFromCollections(CollectionName){
    if (!MainDB) {
       await Initialize()
    }

    if (!Collections[CollectionName]) {
        Collections[CollectionName] = MainDB.collection(CollectionName)
    }
    return Collections[CollectionName]
}

//
