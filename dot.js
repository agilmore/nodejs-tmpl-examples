var dot = require('dot').process();

var compiled = dot.compilePath('dot.dot');
print(compiled({
  title: 'doT Demo',
  people: ["Andrew", "Sam"],
  optext: "Hello!"
}));

