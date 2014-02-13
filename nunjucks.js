var nunjucks = require('nunjucks');

nunjucks.render(
  'nunjucks.nunjucks',
  {
    title: 'Nunjucks Demo',
    people: ["Andrew", "Sam"],
    optext: "Hello!"
  },
  function(err, res) { print(res); }
);
