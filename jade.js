var jade = require("jade");

fs.readFile('jade.jade', {encoding: 'utf8'}, function(err, data) {
  var compiled = jade.compile(data);
  print(compiled({
    title: 'Jade Demo',
    people: ["Andrew", "Sam"],
    optext: "Hello!"
  }));
});
