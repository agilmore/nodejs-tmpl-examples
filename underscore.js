var _ = require("underscore"),
    fs = require('fs');

fs.readFile('handlebars.handlebars', {encoding: 'utf8'}, function(err, data) {
  var compiled = _.template(data);
  var output = compiled(
    {
      title: 'Underscore templates Demo',
      people: ["Andrew", "Sam"],
      optext: "Hello!"
    }
  );
  print(output);
}
