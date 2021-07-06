function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  // document.body.style.backgroundColor = "white";
}

document.getElementById("voicemail1").addEventListener("click", function(){beginThePage(voicemailArray, audioFileVoicemail);loadVoicemail();}, false)
document.getElementById("voicemail2").addEventListener("click", function(){beginThePage(voicemailArray2, audioFileVoicemail);loadVoicemail();}, false)


var voicemailArray = ["aaaaaaj","qhVehcHwOB8", "qhVehcHwOB8", "qhVehcHwOB8", "qhVehcHwOB8", "qhVehcHwOB8", "qhVehcHwOB8"];
var voicemailArray2 = ["fhfhfhfh", "NJea386275c", "NJea386275c", "NJea386275c", "NJea386275c", "NJea386275c", "NJea386275c", "NJea386275c", "NJea386275c"];


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
