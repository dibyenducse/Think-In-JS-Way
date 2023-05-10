//Copy nested reference immutably

var language = {
    name: 'JavaScript',
    estd: '1995',
    chars: ['a', 'c', 'd'],
};

var language2 = { ...language, chars: [...language.chars] };

language2.chars.push(5);

console.log(language);
