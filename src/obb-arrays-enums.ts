// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: '정욱',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 'USER', AUTHOR = 'EDITOR'  };

const person = {
    name: '정욱',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

let favoriteActivities: any[];
favoriteActivities = ['Sports', 5];

console.log(person.name);

for (const sadas of person.hobbies) {
    console.log(sadas);
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}