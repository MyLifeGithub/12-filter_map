let arr = [1,2,3,4,5,'5','','7','8'];
let nums = 0
arr.map((item) => {
    if (typeof(item) == 'number') {
        nums++ 
    }
    else if (arr.length == arr.indexOf(item) + 1 && nums <= 5) {
        console.log('bad, look at the array below')
        console.log(arr);
    }
})  
if (nums > 5) {
    console.log('good, look at the array below');
    console.log(arr);
}
// let nums = arr.filter((item) => typeof(item) == 'number')


let num = +prompt('Enter number')
if (num >= 100) {
    console.log('good');
}
else {
    
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
let even = [];
let odd = [];
even.push(numbers.filter((num) => num % 2 == 0))
odd.push(numbers.filter((num) => num % 2 !== 0))