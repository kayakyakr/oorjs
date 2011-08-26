# oorjs

## Description

oorjs stands for Object-Oriented Railsish (or Rubyish if you prefer) Javascript. While there are a number of rails-like nodeJs frameworks
already in existance, most of them are taking advantage of module-based encapsulation rather than the true object-oriented nature of
javascript. 

## Requirements
  * ejs for templating
  
## Project Outline
  1. 0.1 - View/Controller, Automatic Routing, Server
  1. 0.2 - Model, Migrations, Database controllers
  1. 0.3 - Session (plugin?)
  1. 0.4 - Advanced routing
  1. 0.5 - Websocket support - MVC/routing support from socket requests
  1. 0.6 - Action filters
  1. 0.7 - Generators
  1. 0.8 - Packaged/standalone commands
  1. 0.9 - Package manager
  1. 0.10 - Associations


## Class Structure

    module.export = Class(function(){}, {
      public_function: function(){
      },
      
      protected: {
        protected_function: function(){
        }
      },
      
      private: {
        private_function: function(){
        }
      }
    });

## Controller Structure

    module.export = Class(Controller, {
      before_filters: [{only:['index'], fn: 'before_filter_function'}],
      
      after_filters: [],
      
      index: function(){
      },
      
      other_controller_action: function(){
      },
      
      protected: {
        before_filter_function: function(){
        }
      }
    });
    
## Model Structure

    module.export = Class(Model, {
      attributes: ['attr1', 'attr2', 'attr3'],
      before_create: 'before_create_function',
      protected: {
        before_create_function: function(){
        }
      }
    });

## View Comments

Views will use ejs. They will have a scope of the helper, so any call to this.*function* will use the code for the matching helper function (if it exists). 
The locals for ejs will be set to the "instance" variables of the controller (ie: everything on the controller that is not a function or one of the protected terms).
