const array = ['Orange','Apple','Pineapple','Grapes'];
// map -- fliter -- find

const mappArray = array.map((item) =>{
        console.log(item);
        document.querySelector('#map').innerHTML = item;
    });

const filterArray = array.filter(word => word=="Orange" || word=="Grapes" );
console.log(filterArray)


document.querySelector('#filter').innerHTML = filterArray;

const findArray = array.find(item => item === "Apple")
document.querySelector('#find').innerHTML = findArray;

let time = new Date();
document.querySelector('#time').innerHTML = time.getHours();
let time1 = new Date();
document.querySelector('#time1').innerHTML = time;
