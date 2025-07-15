import { fetchFromCollections } from "../database.js"
import { ObjectId } from "mongodb"

const Modes = {
    'safemode': {projection: { password: 0 }},
    'backend': {projection: {  }},
}

/*export default function(UserID, Mode){
    const Collection = fetchFromCollections('UserData')
    const Setting = Mode ? Modes[Mode] : Modes['safemode']

    return Collection.findOne({ 'userId': { $regex: '^' + UserID + "$" } }, Setting)
}*/

// Function to find user by MongoDB _id
/*export default function(id, Mode) {
    const Collection = fetchFromCollections('UserData')
    const Setting = Mode ? Modes[Mode] : Modes['safemode']
    
    return Collection.findOne({ '_id': id }, Setting) // so you just have to findOne() with {_id: <string>}? 
}*/

// Function to find user by MongoDB ObjectId (if you need to convert string to ObjectId)
export async function fetchUserByObjectId(idString, Mode) {
    const Collection = await fetchFromCollections('UserData')
    const Setting = Mode ? Modes[Mode] : Modes['safemode']
    
    // If you need to convert string to ObjectId, uncomment the next line:
    const id = new ObjectId(idString)
    
    return Collection.findOne({ '_id': id }, Setting)
}

export async function fetchAllUsers_DB(mode, searchParams, queryData){
    try {
        let {page, pageCount} = queryData
        page = parseInt(page, 10) || 1
        pageCount = parseInt(pageCount, 10) || 20

        const Collection = await fetchFromCollections("UserData")
        
        const Users = await Collection.aggregate([
            ...searchParams,
            {
                $project: { password: 0 }
            },
            {
                $facet: {
                    metadata: [{ $count: 'totalCount' }],
                    data: [{ $skip: (page - 1) * pageCount }, { $limit: pageCount }],
                },
            },
        ]).toArray();

        return {
            metadata: { totalCount: Users[0].metadata[0].totalCount, page, pageCount },
            data: Users[0].data,
        };
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`)
    }
}

export async function addUser_DB(Data){
    try {
        //
        console.log(Data)
        const Collection = await fetchFromCollections("UserData")

        return await Collection.insertOne(Data)
        //
    } catch (error) {
        throw new Error(`Failed to add user: ${error.message}`)
    }
}

export async function updateUser_DB(UserID, Update) {
    try {
        //
        const Collection = await fetchFromCollections("UserData")
        const Obj = new ObjectId(UserID)

        Collection.updateOne({ _id: Obj }, {
            "$set": Update
        })
        //
    } catch (error) {
        throw new Error(`Failed to update user: ${error.message}`)
    }
} 

// Default export for backward compatibility
export default {
    fetchUserByObjectId
}