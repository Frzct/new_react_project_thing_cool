import { fetchFromCollections } from "../database.js"

const Modes = {
    'safemode': {_id: 0, password: 0},
}

export default function(mode){
    const Collection = fetchFromCollections("UserData")
    const setting = mode ? Modes[mode] : Modes['safemode']

    return Collection.find({}, setting)
}