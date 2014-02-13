var dust = require('dustjs-linkedin'),
    fs = require('fs');

fs.readFile('dust.dust', {encoding: 'utf8'}, function(err, data) {
  var compiled = dust.compile(data, "templateid");
  dust.loadSource(compiled);
  
  dust.render(
    "templateid",
    {
      title: 'Dust (Linkedin fork) Demo',
      people: ["Andrew", "Sam"],
      optext: "Hello!"
    },
    function(err, out) {
      print(out);
    });
  );
});
