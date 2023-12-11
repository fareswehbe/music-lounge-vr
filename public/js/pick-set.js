AFRAME.registerComponent('pick-set', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', function () {
      const djModel = document.querySelector("#dj-set");
      const micModel = document.querySelector("#microphone-set");
      const podiumModel = document.querySelector("#podium-set");

      if (currentModel === 0) {
        djModel.setAttribute("visible", "true");
        micModel.setAttribute("visible", "false");
        podiumModel.setAttribute("visible", "false");
        currentModel = 1;
      } else if (currentModel === 1) {
        micModel.setAttribute("visible", "true");
        djModel.setAttribute("visible", "false");
        podiumModel.setAttribute("visible", "false");
        currentModel = 2;
      } else if (currentModel === 2) {
        podiumModel.setAttribute("visible", "true");
        djModel.setAttribute("visible", "false");
        micModel.setAttribute("visible", "false");
        currentModel = 0;
      }
    });
  },
});