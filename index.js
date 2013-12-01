/**
 * Module dependencies
 */

var bind = require('bind');
var events = require('event');
var Emitter = require('emitter');
var requestAnimFrame = require('raf');

/**
 * Expose `Throttled`
 */

module.exports = Throttled;


function Throttled(){
  this.state = { scroll: false, resize: false };
  bind.methods(this, 'capture', 'update');
  this._bind();
}


/**
 * Install Emitter
 */

Emitter(Throttled.prototype);


/**
 * Bind `resize` / `scroll` DOM events
 */

Throttled.prototype._bind = function(){
  events.bind(window, 'resize', this.capture);
  events.bind(window, 'scroll', this.capture);
}


/**
 * Callback to the DOM events
 */

Throttled.prototype.capture = function(e){
  for(var k in this.state){
    if (k === e.type && !this.state[k]) {
      this.state[k] = true;
      requestAnimFrame(this.update);
      continue;
    }
  }
}


/**
 * Emit `scroll`, `resize` event respectively
 */

Throttled.prototype.update = function() {
  
  for(var k in this.state){
    if(this.state[k]){
      this.emit(k);
      this.state[k] = false;
      continue;
    }
  };

};


/**
 * Unbind dom events and remove all listeners
 */

Throttled.prototype.destroy = function() {
  
  events.unbind(window, 'resize');
  events.unbind(window, 'scroll');
  this.off();

};

