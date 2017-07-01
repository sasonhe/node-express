/**
 * Created by Administrator on 2017/7/1.
 */

// require('./css/style.css');
document.write('hello webpack11')
// console.log(1);
var component = require('./conponent');
component();


function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());