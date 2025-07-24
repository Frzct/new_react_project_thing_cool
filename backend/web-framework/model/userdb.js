import { fetchFromCollections } from "../database.js"
import { ObjectId } from "mongodb"

import bcrypt from 'bcryptjs'
import JWT from "jsonwebtoken"

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

const bsalt = bcrypt.genSaltSync()

//
/*async function reconcileData(){
    const Collection = await fetchFromCollections('UserData')

    await Collection.updateMany()
}*/

//await reconcileData()
//

// Function to find user by MongoDB ObjectId (if you need to convert string to ObjectId)
export async function fetchUserByObjectId(idString, Mode) {
    const Collection = await fetchFromCollections('UserData')
    const Setting = Mode || {projection: { password: 0 }}
    

    // If you need to convert string to ObjectId, uncomment the next line:
    const id = new ObjectId(idString)
    
    return Collection.findOne({ '_id': id }, Setting)
}

export async function fetchUserByName(name, Mode) {
    const Collection = await fetchFromCollections('UserData')
    const Setting = Mode || {projection: { password: 0 }}

    return Collection.findOne({ "user": name }, Setting)
}

export async function fetchUserIDFromJWT(token) {

    const user = JWT.verify(
        token,
        process.env.JWT_SECRET,
    )

    if (!user) return false

    return user
}

export async function fetchAllUsers_DB(searchParams, queryData){
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

//

export async function login_DB(Data){
    try {
        //
        const User = await fetchUserByName(Data.user, 'backend')

        if (!User) { return }
        if (!await bcrypt.compare( Data.password, User.password )) return

        const token = JWT.sign({ 
            userId: User._id.toString()
        }, process.env.JWT_SECRET, { expiresIn: '24h' })

        return token
        //
    } catch (error) {
        throw new Error(`Failed to login: ${error.message}`)
    }
}

export async function addUser_DB(Data){
    try {
        //
        const Collection = await fetchFromCollections("UserData")
        const ExistingUser = await fetchUserByName(Data.user)

        if (ExistingUser) {
            return
        }

        Data.password = await bcrypt.hash(Data.password, bsalt)

        //console.log("Password hashed:", Data.password)

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

//
export async function getFieldData_DB(UserID, Field) {
    try {
        return await fetchUserByObjectId(UserID, {
            projection: { _id: 0, [Field]: 1 }
        }).then( res => res.chatLog )

    } catch (error) {
        throw new Error(`Failed to get new field data for ${UserID}: ${error.message}`)
    }
}

// Default export for backward compatibility
export default {
    fetchUserByObjectId
}