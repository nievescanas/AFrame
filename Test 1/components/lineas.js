
AFRAME.registerComponent('lineas_obj', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse
  },

  // Start looking at the entity's content
  init: function () {
    const el = this.el;
    var sceneEl = document.querySelector('a-scene');
    this.el.addEventListener('click', function (evt) {
      var lines_obj = el.querySelectorAll('.linedit');
      var lines = sceneEl.querySelectorAll('.linedit');
      el.setAttribute('line', "calor:blue");
      el.setAttribute('transparent','true');
      el.setAttribute('position', "-3.5 1.8 -7.94");
      console.log("Lines EL");
      console.log(lines_obj);
      console.log("Lines SCENE");
      console.log(lines);
      console.log("objeto 3D");
      console.log(sceneEl.querySelectorAll('a-box'));
    });
  },

});
