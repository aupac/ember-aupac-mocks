/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-aupac-mocks',
  isDevelopingAddon: function() {
    return true;
  },
  included: function(app) {
	  this._super.included(app);
    app.import('vendor/shims.js', {
      type: 'test'
    });
  }
};
