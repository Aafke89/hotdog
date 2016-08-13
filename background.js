chrome.tabs.onMoved.addListener(function(activeInfo) {
  chrome.tabs.executeScript({
    "file": 'hotdog.js'
  });
});

// optie om te gebruiken wanneer er een facebook tab wordt gesloten:
// http://www.wavsource.com/snds_2016-08-07_1461683041535257/movies/pulp_fiction/break_x.wav
