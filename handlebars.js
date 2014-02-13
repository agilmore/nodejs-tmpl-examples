var handlebars = require('handlebars');

fs.readFile('handlebars.handlebars', {encoding: 'utf8'}, function(err, data) {
  var compiled = handlebars.compile(data);
  var output = compiled(
    {
      title: 'Handlebars Demo',
      people: ["Andrew", "Sam"],
      optext: "Hello!"
    }
  );
  print(output);
});
