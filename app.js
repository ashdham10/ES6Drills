let favMovie = (movie = 'The Room', name = 'world') => console.log(`my name is ${name} and my fave movie is ${movie}!`)

favMovie();
favMovie('all dogs go to heaven', 'ashley');
favMovie();

let getFirstName = firstName => console.log(firstName);
let name = 'Ashley Denham'
let fullName = name.split(' ');
getFirstName(fullName[0]);

let getNums = (x, y) => {
    let add = x ^ y;
    let product = x * y;

    return{add, product};
}
let nums = getNums(10, 4);
console.log(nums);

let func = (names, location, favFood) => {
   return {names, location, favFood}
}
let arr = ['Andy', 'Bham', 'Sushi'];
console.log(func(...arr));

let myFunc = param => {
    let array =  param.split('');
    console.log(array);
    array.forEach(char => {
        console.log(...char);
    })
}
myFunc('grindelwald');


