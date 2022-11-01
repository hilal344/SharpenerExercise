let listitems = document.querySelector('#items');
// console.log(listitems.parentElement);
// listitems.parentElement.style.backgroundColor='red'

// console.log(listitems.lastElementChild);
// listitems.lastElementChild.textContent = 'abdullah';

// console.log(listitems.lastChild);
// listitems.lastChild.textContent='hilal';

// // console.log(listitems.fir);

// console.log(listitems.firstElementChild);

// console.log(listitems.nextSibling);

// console.log(listitems.nextElementSibling);


// console.log(listitems.previousSibling);

// console.log(listitems.previousElementSibling);
// listitems.previousElementSibling.textContent='redsea';

var newDiv  = document.createElement('div');
newDiv.className = 'hilal';
newDiv.id = 'blackeye';
newDiv.setAttribute('title', 'hello div');
var newDivtxt = document.createTextNode('hello sharpner');
newDiv.appendChild(newDivtxt);
var container = document.querySelector('header .container');
var h1 = document.querySelector('haeder h1');
container.insertBefore(newDiv, h1);
newDiv.style.color='red'
console.log(newDiv);


var item1 = document.getElementsByTagName('li');
console.log(item1[0]);
container.insertBefore(newDiv, item1[0]);
