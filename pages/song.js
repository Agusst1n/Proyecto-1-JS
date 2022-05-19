var song = document.getElementById("song");
var controlButton = document.getElementById("controlButton");
var count = 0;

function playStop(){
    if(count == 0){
        count = 1;
        song.play();
    }else{
        count = 0;
        song.pause();
    }
}
