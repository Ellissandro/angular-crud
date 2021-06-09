const { exec } = require('child_process');
const fs = require('fs');

var name = process.argv[2];
var name_component = process.argv[3];

exec('ng g m pages/' + name, (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);

  var t = stdout.replace('CREATE ', '');
  var s = (t.split('/'));
  s = s.slice(2, s.length - 1);
  var pathComponent = s.join('/');

  exec(`ng g s --skipTests=true ${pathComponent}/${name}`, (error2, stdout2) => {
    if (error2) {
      console.error(`exec error: ${error2}`);
      return;
    }
    console.log(`stdout: ${stdout2}`);

    exec(`ng generate class ${pathComponent}/${name} --type=model --skipTests=true`, (error3, stdout3) => {
      if (error3) {
        console.error(`exec error: ${error3}`);
        return;
      }
      console.log(`stdout: ${stdout3}`);

      if (name_component) {
        exec(`ng g c --skipTests=false ${pathComponent}/components/${name_component}`, (error4, stdout4) => {
          if (error2) {
            console.error(`exec error: ${error4}`);
            return;
          }
          console.log(`stdout: ${stdout4}`);
        })
      }
      else {
        fs.mkdirSync(`src/app/${pathComponent}/components`)
      }
    })
  })
})