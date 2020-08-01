var str = 'It is a great day.'

console.log(str.endsWith('.'));
console.log(str.endsWith('day .'));
console.log(str.endsWith('day.'));
console.log(str.endsWith('fake'));

// Result
// true
// false
// true
// false