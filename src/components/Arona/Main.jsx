import React, { useState, useEffect } from "react";
import Dialogues from './dialogues'
import styles from '../Components.module.css'

const AronaEmotion = Object.freeze({
    'happy': './eye_open.png',
    'sad': './eye_closed.png'
})

function getRandom(max){
    return Math.floor(Math.random() * max)
}

export default function({ AronaState, setAronaState }){

    function OnClick( e ){
        const stateDialogue = Dialogues[AronaState]
        console.log(stateDialogue[getRandom(stateDialogue.length)], AronaState)
    }

    return (
        <div className={styles.arona_container}>
            <img className={styles.arona} src={AronaEmotion[AronaState]} onClick={OnClick}/>

            {
                useEffect(() => {
                    console.log("Emotion refresh")
                    OnClick()

                }, [ AronaState ])
            }

        </div>
    )
    
}   