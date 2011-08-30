
Class = function(inherit, config){
  var constr = config['constructor'];
  
  //delete config['constructor'];
  
  var cls = constr || function(){};
  cls.prototype = Object.create(inherit.prototype);
  
  var priv = config['private'];
  delete config['private'];
  var prot = config['protected'];
  delete config['protected'];
  
  for(var p in config){
    cls.prototype[p] = config[p];
  }
  
  cls.prototype.superclass = inherit.prototype;
  // do something with the private and protected methods here
  
  return cls;
}
