
function setup() {
noCanvas();
let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec('en-US', gotSpeech);
speechRec.start();

function gotSpeech() {
    console.log(speechRec);
}
}

function draw() {

}