var oscillator = null;
var isPlaying = false;

function play(freq, gain) {

    //stop the oscillator if it's already playing
    if (isPlaying) {
        oscillator.stop();
        isPlaying = false;
    }

    //re-initialize the oscillator
    var context = new AudioContext();

    //create the volume node;
    var volume = context.createGain();
    volume.connect(context.destination);

    //connect the oscillator to the nodes
    oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = freq;

    oscillator.connect(volume);
    //oscillator.connect(context.destination);

    //start playing
    oscillator.start();
    isPlaying = true;
    volume.gain.value = gain;

    //log
    console.log('Playing at frequency ' + freq + ' with volume ' + gain);
}

function keypressed() {    
    var value = document.getElementById('input-volume').value;
    console.log(value)
    //play(freq, gain) 
    play(360, value)
}