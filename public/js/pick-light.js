AFRAME.registerComponent('pick-light', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', function () {
      const light1 = document.querySelector("#light-1");
      const light2 = document.querySelector("#light-2");
      const light3 = document.querySelector("#light-3");

      if (currentLight === 0) {
        light1.setAttribute("visible", "true");
        light2.setAttribute("visible", "false");
        light3.setAttribute("visible", "false");
        currentLight = 1;
      } else if (currentLight === 1) {
        light2.setAttribute("visible", "true");
        light3.setAttribute("visible", "true");
        light1.setAttribute("visible", "false");
        currentLight = 2;
      } else if (currentLight === 2) {
        light3.setAttribute("visible", "false");
        light1.setAttribute("visible", "false");
        light2.setAttribute("visible", "false");
        currentLight = 0;
      }
    });
  },
});