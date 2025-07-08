import { fetchFromCollections } from "../database.js"

const Modes = {
    'safemode': {_id: 0, password: 0},
    'backend': {_id: 0},
}

export default function(UserName, Mode){
    const Collection = fetchFromCollections('UserData')
    const Setting = Mode ? Modes[Mode] : Modes['safemode']

    return Collection.findOne({ 'user': { $regex: '^' + UserName + "$", $options: "i" } }, Setting)
}