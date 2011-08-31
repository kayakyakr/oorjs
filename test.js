
require('class');

var cls = Class(function(){},{
  inh: function(){
    return 'inherited';
  }
}).extend(require('events').EventEmitter);

module.exports = Class(cls, {
  constructor: function(){
    this.foo = "bar";
  },
  
  func: function(){
    
  },
  
  stat: 'ast'
});