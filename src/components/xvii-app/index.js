const Polymer = require('../../polymer');

module.exports = new Polymer({

  is: 'xvii-app',

  properties: {
    foo: {
      type: String,
      value: 'Hello, World'
    }
  },

  attached() {
    if (!this.route.path) {
      this.set('route.path', '/');
    }
  },

  _drawerSelected() {
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

});
