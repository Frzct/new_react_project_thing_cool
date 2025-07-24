import {aronaTalk_Service} from '../service/arona.js'

export async function aronaTalk(req, res) {
    await aronaTalk_Service(req, res)
 }