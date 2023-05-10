//Copy nested reference immutably
//use loadash
var language = {
    name: 'JavaScript',
    estd: '1995',
    chars: ['a', 'c', 'd'],
};

var language2 = { ...language };

language2.chars.push(5);

console.log(language);
console.log(language2);
