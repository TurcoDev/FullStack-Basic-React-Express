import {User, UserResponse} from '../models/user.interface';

export const users: User[] = [
  {
    id: 0,
    name: "Pedro",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    age: 15,
  },
  {
    id: 1,
    name: "Florencia",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    age: 89,
  },
  {
    id: 2,
    name: "Paco",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    age: 35,
  },
  {
    id: 3,
    name: "Mauricio",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    age: 29,
  }
];

export const users2 = function (callback: any){
  fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(usersData => {
    // console.log(data);
    callback(usersData.data);
  });
}

// export default users;