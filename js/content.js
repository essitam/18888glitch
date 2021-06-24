const aboutContent = "<div class=\"voicemail vm1\" id=\"content\"><div class=\"glitch back noise\"></div><br><button id=\"xmark\"> x </button> 1-8888-GLITCH is an interactive voicemail-to-film platform. Call the toll-free number and leave a message <br><br> Collaborative media platform <br> Call-and-response <br> Run from Toronto, but open to anyone. <br> <br> <i> How it works: <br> Call <br> Listen & Watch <br> Create A Film <br> </i> Tba– a livestream of the video archive glitched and manipulated.<br><br><b>Terms and Conditions</b> <br><br><br> By participating, you grant a non-exclusive license to 1-8888-GLITCH for any voicemails and short films that are created for the project. There is no monetary <br><br> By leaving a message and/or submitting a film, you grant permission to 1-8888-GLITCH, the rights of your contribution of a voice message and/or film, in video, sound, or still, and of the likeness and sound of your voice as recorded through the toll free number, 1-8888-GLITCH. <br><br> Understand that image and sound may be edited, copied, exhibited, published, or distributed and waive the right to inspect or approve the finished product wherein a participant(s) likeness appears. Additionally, the participant waives any right to royalties or other compensation arising or related to the use of the image or recording. These audio, video, and digital inclusions are included but not limited to being featured on YouTube, Vimeo, Instagram, TikTok, and Twitter. <br><br> Photographic, audio or video recordings may be used for ANY purpose which may include but it not limited to: Presentations online/internet videos Media News (press)</div>";
const filmContent = "<div class=\"voicemail vm1\" id=\"content\"><div class=\"glitch back noise\"></div> <button id=\"xmark\"> x </button><br><b>Film Submissions</b> <br><br> Using a voicemail message from the archive, create a two minute film that prioritizes the act of listening. Avoid repeatedly playing the message and try creating from intuition, using any camera available to you. The intent is for instinctual and spontaneous filmmaking without “overthinking.” The response could be anything from narrative, experimental, video portraits, animation, landscapes, or simply listening to it for the first time in front of your webcam. No experience required. <br><br> The audio should only be the raw voicemail file, available for download. Your film can be edited using any film editing software, app, or website. There are many free intuitive options out there. If you’re experiencing issues or require assistance, contact us at 18888glitch@gmail.com <br><br> All entries that follow the guidelines will be accepted and uploaded to the website within 48 hours. Submit your film using this form. <br><br> Website - TOLL FREE <br> speak of the impression they left on you.</div>";
const voicemailContent = '<div class="gallery"> <ul id="card" class="cards"> </ul> <div class="actions"> <button class="prev button">Prev</button> <button class="next button">Next</button> </div></div>'
document.getElementById("aboutButton").addEventListener("click", function(){document.getElementById("contentt").innerHTML = aboutContent;zfunc();zindexcontent();hideThis('actions');}, false)
document.getElementById("filmButton").addEventListener("click", function(){document.getElementById("contentt").innerHTML =filmContent;zfunc();zindexcontent();hideThis('actions');}, false)
// document.getElementById("voicemailButton").addEventListener("click", function(){document.getElementById("contentt").innerHTML =""}, false)
// document.getElementById("voicemail1").addEventListener("click", function(){document.getElementById("contentt").innerHTML =voicemailContent;beginThePage(voicemailArray, audioFileVoicemail);loadVoicemail();}, false)
// document.getElementById("voicemail1").addEventListener("click", function(){beginThePage(voicemailArray, audioFileVoicemail);loadVoicemail();zindexvoicemails();showThis('actions');}, false)

function zfunc(){
      document.getElementById("xmark").addEventListener("click", function(){document.getElementById("contentt").innerHTML ="";}, false)
}

function zindexcontent(){
  document.getElementById("contentt").classList.remove('zindexBottom');
  document.getElementById("contentt").classList.add('zindexTop');
  document.getElementById("voicemails").classList.remove('zindexTop');
  document.getElementById("voicemails").classList.add('zindexBottom');
}
function zindexvoicemails(){
  document.getElementById("voicemails").classList.remove('zindexBottom');
  document.getElementById("voicemails").classList.add('zindexTop');
  document.getElementById("contentt").classList.remove('zindexTop');
  document.getElementById("contentt").classList.add('zindexBottom');
}

var voicemailArray = ["aaaaaaj","qhVehcHwOB8", "qhVehcHwOB8", "qhVehcHwOB8", "qhVehcHwOB8", "qhVehcHwOB8", "qhVehcHwOB8"];
var audioFileVoicemail = "01 Ephemeral U.mp3";
function beginThePage(voicemailArray, audioFileVoicemail){
  var voicemail = voicemailArray;
  let fLen = voicemail.length;
  var cardi = document.getElementById('card');
  cardi.innerHTML='';
  for (let i = 0; i < fLen; i++) {
    var li = document.createElement("li");
    var p = document.createElement("p");
    var img = document.createElement("img");
    img.setAttribute('data-video', voicemail[i] );
    img.setAttribute('alt', 'Play this video');
    img.setAttribute('src', 'http://img.youtube.com/vi/'+ voicemail[i] +'/0.jpg')
    p.appendChild(img);
    li.appendChild(p);
    cardi.appendChild(li);
  }
    var lii = document.createElement("li");
    var aaa = document.createElement("a");
    aaa.setAttribute('href', audioFileVoicemail);
    aaa.setAttribute('download', 'download');
    aaa.innerText="download this audio file";
    lii.appendChild(aaa);
    cardi.appendChild(lii);

    var liii = document.createElement("li");
    liii.innerHTML = "submit";
    cardi.appendChild(liii);
}

function exitVoicemail(){
  var cardi = document.getElementById('card');
  cardi.innerHTML='';
}
function showThis(id){
  var show = getElementById(id);
  show.classList.remove('hideThis');
  show.classList.add('showThis');
}

function hideThis(id){
  var show = getElementById(id);
  show.classList.remove('showThis');
  show.classList.add('hideThis');
}
