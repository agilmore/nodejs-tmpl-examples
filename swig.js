var swig = require('swig');

swig.renderFile(
  'swig.tpl.html',
  {
    title: 'Swig Demo',
    people: ["Andrew", "Sam"],
    optext: "Hello!"
  },
  function(err, output){ print(output); }
);

