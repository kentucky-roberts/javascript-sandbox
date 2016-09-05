
var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

var pathArray = window.location.pathname.split( '/' );

var secondLevelLocation = pathArray[0];


var newPathname = "";
for (i = 0; i < pathArray.length; i++) {
  newPathname += "/";
  newPathname += pathArray[i];
}


var object1 = ['The First', 'Next in line', 'Third for good measure.'];
var object2 = ['Mary', 'Bob', 'Ben', 'Randy', 'Jimmy'];

var object = angular.merge({}, object1, object2)

console.log(object);