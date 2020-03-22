
var args = process.argv.slice(2);

var akb = require('./akb48');

var members = Object.keys(akb).map(function(key) {
  return [key, akb[key]];
});

for (arg of args) {
  for (member of members) {
    if (member[0].match(arg)) {
      console.log(member);

    } else if (member[1].surname.hiragana.match(arg) ||
               member[1].given_name.hiragana.match(arg) ||
               member[1].nickname.match(arg)) {
      console.log(member);

    }

  }
}
