const video = document.getElementById('videoElm');
if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: {}}).then(function(stream) {
        video.srcObject = stream;
    });
}