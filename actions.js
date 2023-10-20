import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()

}

export function reset () {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function set () {
  el.minutes.setAttribute('contenteditable', true);
  el.minutes.focus()
}


export function toggleMusic (sound) {
  if(sound !== state.oldSound){
    const oldSoundButton = document.querySelector(`[data-action="${state.oldSound}"]`)
    if(!!oldSoundButton){
      oldSoundButton.classList.toggle('music-on')
      sounds[state.oldSound].pause()
    }

    sounds[sound].play()
    document.querySelector(`[data-action="${sound}"]`).classList.toggle('music-on')

    state.oldSound = sound
    return
  }
  // state.isMute = document.documentElement.classList.toggle('music-on')
  // if(state.isMute){
  //   sounds.rain.play()
  //   return
  // }

  sounds[sound].play()
  document.querySelector(`[data-action="${sound}"]`).classList.toggle('music-on')

  
}


