var ejs = require('ejs'),
    fs = require('fs');
    
ejs.renderFile(
  'ejs.tpl.html',
  {
    cache: true
    title: 'EJS Demo',
    people: ["Andrew", "Sam"],
    optext: "Hello!"
  },
  function(err, output){ print(output); }
);
