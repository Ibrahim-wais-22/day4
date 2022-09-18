const array = ['Orange','Apple','Pineapple','Grapes'];
// map -- fliter -- find

const mappArray = array.map((item) =>{
    console.log(item);
    document.querySelector('#map').innerHTML = item;
} );
// array.forEach(element => {
//     document.querySelector('#map').innerHTML = element;
//     console.log(element)
// });

const filterArray = array.filter(item => typeof item === 'string');
document.querySelector('#filter').innerHTML = filterArray;

const findArray = array.find(item => item === "Apple")
document.querySelector('#find').innerHTML = findArray;

let time = new Date();
document.querySelector('#time').innerHTML = time.getHours();
let time1 = new Date();
document.querySelector('#time1').innerHTML = time;
// عمل غير مكتمل