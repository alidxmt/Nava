

    var oscillator;
var context;
var volume;

function startNavaPlay() {}


function play(Lfreq, Lgain,STPL) {

    context = new AudioContext();
    volume = context.createGain();
    //stop the oscillator if it's already playing
    if (!Start_Nava) {
        
        console.log('if (Start_Nava) {')
        
        //volume.gain.setValueAtTime(Lgain, context.currentTime);
        
        //oscillator.frequency.setValueAtTime(Lfreq, context.currentTime);

        if (STPL=='ST') {
            console.log('_______beist_____',oscillator)
            oscillator.stop();
            isPlaying = false;
            console.log('osc is stoped')

        }
    }
    else {
    //re-initialize the oscillator
    console.log('else')

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