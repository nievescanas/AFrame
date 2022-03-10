// Component:
// Input elements:
// Ej:

AFRAME.registerComponent('button_clone', {
  schema: {
     position: {type: 'vec3', default: {x:0, y:0, z:0}},
     id: {type: 'string'},
     parse: AFRAME.utils.styleParser.parse
  },
  init: function () {
    const data = this.data;
    const el = this.el;
//    this.el.addEventListener('click', function (evt) {
//      console.log(evt.detail.intersection.point);
//      console.log("Distancia");
//      console.log(evt.detail.intersection.distance);
//      console.log("Face");
//      console.log(evt.detail.intersection.face);
//      console.log("IndexFace");
//      console.log(evt.detail.intersection.faceIndex);
//      console.log("Indices");
//      console.log(evt.detail.intersection.indices);
//      console.log("object");
//      console.log(evt.detail.intersection.object);
//    });
    el.addEventListener(data.event, evt => {
      var obj_clone = el.cloneNode(true);
      obj_clone.setAttribute('position', data.position);
      obj_clone.removeAttribute('button_clone');

      // Modification of object position
      document.querySelector("#" + data.id).appendChild(obj_clone);


    });
  }
});
