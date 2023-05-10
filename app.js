//Copy nested reference immutably
//use loadash
var language = {
    name: 'JavaScript',
    estd: '1995',
    chars: ['a', 'c', 'd'],
};

var language2 = _.cloneDeep(language);

language2.chars.push(5);

console.log(language);
console.log(language2);

//iterator

String.prototype[Symbol.iterator] = function () {
    let count = this.length;
    return {
        next() {
            if (count > 0) {
                count--;
                return { done: false, value: 'js' };
            }
            return { done: true };
        },
    };
};

console.log([...'hello']);

// Our won Itarable and Iterator

function range(start, end, step) {
    let current = start;
    return {
        [Symbol.iterator]: function () {
            return {
                next() {
                    let result;
                    if (current < end) {
                        result = {
                            done: false,
                            value: current,
                        };
                        current += step;
                        return result;
                    }
                    return {
                        done: true,
                    };
                },
            };
        },
    };
}
console.log([...range(1000, 60000, 2)]);
