var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
	console.log("Play Video");
	console.log(video)
}
//
function pauseVid() {
	video.pause();
	console.log("Pause Video");
}
//
function decreaseSpeed() {
	video.playbackRate = video.playbackRate * 0.8;

  	console.log("Speed is "+ video.playbackRate);
 }
//
 function increaseSpeed() {
	 video.playbackRate = video.playbackRate * 1.25;

	console.log("Speed is "+ video.playbackRate);
}
//
 function skipAhead() {
	 let time = video.currentTime;
	 time =  video.currentTime += 60;
	 if (video.ended)  {
		 video.play();
	 }
	 else{
	 	video.currentTime = time
	 }
	 console.log("Current location is " + video.currentTime);


	//if video has 60 seconds left
	//  if (video.currentTime > 60) {
	//  document.querySelector("#skipAhead");
	//  video.currentTime += 60;
	// }
	//
	// // if the video has less then 60 seconds restart
	//  else {
	//
	// 	 console.log("Current location is " + video.currentTime);

}

function mute() {
	if (video.muted){
		console.log("Changing to Unmuted");
		video.muted = false;
 		document.querySelector("#mute").innerHTML= "Mute"


 	}
 	else {
 		console.log("Changing to Muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML= "Unmute"

	}
 }
//
function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	console.log(volume);
	video.volume  = volume / 100;


	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
	console.log("Volume is " + video.volume);

}
//
//
function gray() {
	// element . video .class list.add
	video.classList.add("grayscale");

 	console.log("In grayscale")
 }
//
 function color() {
	 video.classList.remove("grayscale");

	console.log("In color")
 }
