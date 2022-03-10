// Component:
// Input elements:
// Ej:

AFRAME.registerComponent('delete', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse
  },

  init: function () {
    this.paused = false;
  },

  findChild: function(){
    const el = this.el;
    const obj = el.firstChild;

    if(obj!=null){
      console.log(1);
      obj.addEventListener('dblclick', evt => {
        console.log(2);
        el.removeChild()
      });
      this.paused=true;
    }
  },

  tick : function() {
    if(this.paused==false){
      this.findChild();
    }
  },
});
