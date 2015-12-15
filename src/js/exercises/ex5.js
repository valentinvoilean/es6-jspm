import nn from 'util/nn.init';

nn.Slider = function(){

  var
    _$el,
    CLASSES,
    SELECTORS,

    _returnData = function() {

      console.log('Current element is ' + _$el);

      for(var index in CLASSES) {
        if (CLASSES.hasOwnProperty(index)) {
          console.log(CLASSES[index]);
        }
      }

      for(var index in SELECTORS) {
        if (SELECTORS.hasOwnProperty(index)) {
          console.log(SELECTORS[index]);
        }
      }

    };

  return {
    init: function (el, options) {
      _$el = el;
      ({CLASSES, SELECTORS} = options);

      _returnData();
    },

    destroy: function () {
      CLASSES = null;
      SELECTORS = null;
    }
  }
};

export {nn};
