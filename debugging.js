const users = [
    {
        id: 1,
        username: "steve.simon",
        email: "steve.simon12@gmail.com",
        phone: "+44701231231",
        isConfirmed: true,
        age: 44,
    },
    {
        id: 2,
        email: "xxxxx@gmail.com",
        phone: "+22222222222",
        isConfirmed: false,
        age: 0,
    },
    {
        id: 3,
        username: "Elon Musk",
        email: "elon_musk@spacex.com",
        phone: "+13445346773453",
        isConfirmed: true,
        age: 48,
    },
    {
        id: 4,
        username: "john.smith",
        email: "john_smith22@gmail.com",
        phone: "+231231666555",
        isConfirmed: false,
        age: 18,
    },
    {
        id: 5,
        username: "",
        email: "noname@gmail.com",
        phone: "+231231666555",
        isConfirmed: false,
        age: 18,
    },
    {
        id: 6,
        username: "suzan_knopp",
        email: "suzan_knopp@gmail.com",
        phone: "+666555444333",
        isConfirmed: false,
        age: 38,
    },
];

function findUserWithoutUsernameKey(users) {
    const usersWithoutUserName = [];
    for (const user of users) {
        if (!user["username"]) {
            usersWithoutUserName.push(user);
        }
    }
    return usersWithoutUserName;
}

const filteredUsers = findUserWithoutUsernameKey(users);
/*
    filteredUsers consists 2 users but the expected result only one user, 
    the one which doesn't have username key
    your task is to find the bug in the code using debugger and repair the code
*/

console.log(filteredUsers);
