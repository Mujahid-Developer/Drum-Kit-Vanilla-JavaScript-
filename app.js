//for mobile device alert
window. onload=function(){
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i. test(navigator. userAgent. toLowerCase()));
    if (mobile) {
        alert("This website only works on desktop with a keyboard.😢");              
    } else {

    }
  }

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition (e) {
    if (e.propertyName !== 'transform') return //skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)