// let square = a => a*a;
// console.log(square(3));

// let multiply = (x, y) => {return x*y};
// console.log(multiply(3, 5));

// var x =function(){
//     that = this;
//     that.val=1;
//     setTimeout(function(){
//         this.val++;
//         console.log(that.val);
//     }, 1000)
// }

// var xx = x();


// var x = function(){
//     console.log(arguments[1]);
// }
// x(1, 2, 3);

var x = (...n) => {
    console.log(n[1]);
}
x(1, 2, 3);