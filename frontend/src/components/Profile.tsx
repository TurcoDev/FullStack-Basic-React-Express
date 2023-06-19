import User from '../models/user.interface';
import './Profile.css';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   age: 30
// };

export default function Profile({id, name, imageUrl, age }: User) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{'ID: ' + id}</p>
      <img
        className="userCard"
        src={imageUrl}
        alt={'Photo of ' + name}
      />
    </>
  );
} 