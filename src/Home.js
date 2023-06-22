import React from 'react'
import './App.css'
import './index.css'

export default function Home(){
    return(
       <div>
            <h3 className='home-title'>
                Debugging your Emotions
            </h3>
            <p className="home-content">
                We have built a speech-emotion-recognition model that predicts your emotion based on the tonal properties of the audio. The model has been trained on various datsets from all over the world.Upload an audio file and see the magic.
            </p>
            <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02"/>
            <label class="input-group-text" for="inputGroupFile02">Debug Emotion</label>
            </div>
       </div>
    )
       
    
}