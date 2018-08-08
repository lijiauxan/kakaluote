// var oDiv = document .getElementById ('div1');
// oDiv.innerHTML = 'hello world!!!' ;
import css from './css/index.css';
import sass from'./scss/index.scss';
let json = require('../xxxx.json');


// let a = 20;
// let b = (n)=>{
//     console.log(n);
// }
// b(a);

$('#div1').html(`孔疚${json.name},${json.age}`);