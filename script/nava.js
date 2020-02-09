


var oscillator = null;
var isPlaying = false;
var context = new AudioContext();
var volume = context.createGain();


function play(Lfreq, Lgain) {

    //stop the oscillator if it's already playing
    if (isPlaying) {
        //oscillator.stop();
        //isPlaying = false;
        volume.gain.setValueAtTime(Lgain, context.currentTime);
        
        oscillator.frequency.setValueAtTime(Lfreq, context.currentTime);
        console.log('Playing at frequency ' + Lfreq + ' with volume ' + Lgain);

    }
    else {
    //re-initialize the oscillator

    //create the volume node;
    volume.connect(context.destination);
    volume.gain.value = Lgain;

    //connect the oscillator to the nodes
    oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = Lfreq;

    oscillator.connect(volume);
    //oscillator.connect(context.destination);

    //start playing
    oscillator.start();
    isPlaying = true;

    //log
    console.log('Playing at frequency ' + Lfreq + ' with volume ' + Lgain);
}
}


//not