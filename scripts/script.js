try {
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
}

recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = function(e) {
    console.log('onresult', e);
    var i = 0,
        html = '';
    for (i = 0; i < e.results.length; i += 1) {
        html += e.results[i][0].transcript;
    }
    appendUserDiv(html);
};

recognition.onstart = function(e) {
    console.log('onstart', e);
};

recognition.onend = function(e) {
    console.log('onend', e);
};

recognition.onresult = function(e) {
    console.log('onresult', e);
};

recognition.onspeechend = function(e) {
    console.log('onspeechend', e);
};

recognition.onerror = function(e) {
    console.log('onerror', e);
};

window.onload = function init() {
	recognition.start();
};

function appendBotDiv(data) {
	var div = document.createElement("div");
	div.className = 'container';
	var img = document.createElement("img");
	img.setAttribute("src", "./img/bot.png");
	img.setAttribute("alt", "Avatar");
	var paragraph = document.createElement("p");
	paragraph.innerHTML = data;
	var span = document.createElement("span");
	span.className = 'time-right';
	span.innerHTML = Date.now();
	div.append(img, paragraph, span);
	document.getElementById("box").appendChild(div);
}

function appendUserDiv(data) {
	var div = document.createElement("div");
	div.className = 'container darker';
	var img = document.createElement("img");
	img.setAttribute("src", "./img/user.png");
	img.setAttribute("alt", "Avatar");
	img.className = 'right';
	var paragraph = document.createElement("p");
	paragraph.innerHTML = data;
	var span = document.createElement("span");
	span.className = 'time-left';
	span.innerHTML = Date.now();
	div.append(img, paragraph, span);
	document.getElementById("box").appendChild(div);
}