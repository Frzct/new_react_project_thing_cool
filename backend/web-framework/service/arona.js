import { getFieldData_DB, fetchUserIDFromJWT } from '../model/userdb.js'
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.ARONA_TOKEN);

// arona AI logic
export async function aronaTalk_Service( req, res ) {
    try {

        const { token, message } = req.body
        if (message.length > 50) return res.json({ status: "ERROR", message: "TOO LONG"})

        const id = await fetchUserIDFromJWT(token).then(res => res.userId)
        if (!id) return res.json({ status: "ERROR", message: "nouser"})

        const LastMessages = await getFieldData_DB(id, 'chatLog') || []
        LastMessages.push({ role: 'user', content: message })

        const response = await client.chatCompletion({
            messages: [
                { role: 'user', content: 'You are a chatbot. You WILL help me. Be straight to the face, and do not attempt to use sweet words.' },
                { role: 'assistant', content: "Yo. Gurt. I'm Yo."},
                ...LastMessages
            ],
            model: 'deepseek-ai/DeepSeek-V3-0324',
        })

        //console.log("Received response?", response)

        LastMessages.push({ role: 'assistant', content: response.choices[0].message })
        /*const result = await fetchUserByObjectId(id, 'safemode')

        if (!result) {
            return res.status(404).json({ status: "ERROR", message: "User not found" })
        }*/

        res.json({ status: "OK", content: response.choices[0].message })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}