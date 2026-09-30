console.log('Hello, IT-TOP!');

//Задача

const users = [
    {name: 'olga', age: 19},
    {name: 'ivan', age: 19},
    {name: 'nikitos', age: 19},
    {name: 'geyorgiy', age: 19}
];

function findIvan(arr) {
    return arr.filter((el) => el.name === 'ivan')
};

function addUser(obj){
    users.push(obj)
    return users
};

console.log(addUser({name: 'jarone', age: 72}))