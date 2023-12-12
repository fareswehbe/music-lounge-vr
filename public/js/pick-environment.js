AFRAME.registerComponent('pick-environment', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', function () {
      const sky = document.querySelector("#sky");

      if (currentEnvironment === 0) {
        sky.setAttribute("src", "#night-sky");
        currentEnvironment = 1;
      } else if (currentEnvironment === 1) {
        sky.setAttribute("src", "#day-sky");
        currentEnvironment = 0;
      }
    });
  },
});