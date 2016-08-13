var sound = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_gameover.wav"); // buffers automatically when created
sound.play();
document.title = "Stop moving me!";
changeFavicon('http://www.iconsdb.com/icons/preview/red/x-mark-3-xxl.png');

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}