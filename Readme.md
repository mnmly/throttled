# throttled

  Throttled scroll and resize event via requestAnimationFrame.

  Based on [this article](http://www.html5rocks.com/en/tutorials/speed/animations/)

## Installation

  Install with [component(1)](http://component.io):

    $ component install mnmly/throttled

## Usage

```javascript
var Throttled = require('throttled');
var throttled = new Throttled(); // Probably better to be used as singleton.

throttled.on('scroll', function(){
  console.log('clean scroll');
});

throttled.on('resize', function(){
  console.log('clean resize');
});


// If you don't want this anymore.
throttled.destroy();
```

## Todo

- Allow attatching `scroll` event other than `window`

## License

  MIT
