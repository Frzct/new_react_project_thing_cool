import { fetchFromCollections } from "../database.js"
import { ObjectId } from "mongodb"

const Modes = {
    'safemode': {_id: 0, password: 0},
    'backend': {_id: 0},
}

/*export default function(UserID, Mode){
    const Collection = fetchFromCollections('UserData')
    const Setting = Mode ? Modes[Mode] : Modes['safemode']

    return Collection.findOne({ 'userId': { $regex: '^' + UserID + "$" } }, Setting)
}*/

// Function to find user by MongoDB _id
export default function(id, Mode) {
    const Collection = fetchFromCollections('UserData')
    const Setting = Mode ? Modes[Mode] : Modes['safemode']
    
    return Collection.findOne({ '_id': id }, Setting) // so you just have to findOne() with {_id: <string>}? 
}

// Function to find user by MongoDB ObjectId (if you need to convert string to ObjectId)
export function fetchUserByObjectId(idString, Mode) {
    const Collection = fetchFromCollections('UserData')
    const Setting = Mode ? Modes[Mode] : Modes['safemode']
    
    // If you need to convert string to ObjectId, uncomment the next line:
    const id = new ObjectId(idString)
    
    return Collection.findOne({ '_id': id }, Setting)
}