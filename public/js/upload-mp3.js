AFRAME.registerComponent('upload-handler', {
  init: function () {
    var uploadButton = this.el;

    uploadButton.addEventListener('click', function () {
      var fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'audio/mp3';
      fileInput.addEventListener('change', function (event) {
        var file = event.target.files[0];
        var audioPlayer = document.querySelector('#audioPlayer');
        audioPlayer.setAttribute('sound', 'src', URL.createObjectURL(file));
        audioPlayer.components.sound.playSound();
      });

      fileInput.click();
    });
  }
});