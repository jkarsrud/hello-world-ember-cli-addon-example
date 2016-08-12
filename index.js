/* jshint node: true */
'use strict';

module.exports = {
  name: 'hello-world',

  includedCommands: function() {
    return {
      print: require('./lib/commands/print')
    };
  }
};
