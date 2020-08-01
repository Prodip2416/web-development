var elements = ['gfg', 'geeksforgeeks', 'cse', 'department'];
a = elements.sort((a, b) => a.localeCompare(b));

console.log(a);

// Result
// [ 'cse', 'department', 'geeksforgeeks', 'gfg' ]