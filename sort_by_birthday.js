
var akb = require('./akb48');

var members = Object.keys(akb).map(function(key) {
  return [key, akb[key]];
});

members.sort(function(a, b) {
  return a[1].date_of_birth.substring(5).localeCompare(b[1].date_of_birth.substring(5));
});

var birth = Object.keys(members).map(function(key) {
  return [members[key][0], members[key][1].date_of_birth];
});

for (v of birth) {
  console.log(v);
}
