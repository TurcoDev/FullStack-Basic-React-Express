import { useEffect, useState } from 'react'
import './App.css'
import Profile from './components/Profile';
import User from './models/user.interface';

function App() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
    
  }, []);

  if(isLoading){
    return (
      <div className="app">
        <h1>Cargando usuarios...</h1>
      </div>
    );
  }
  
  if (users === null) {
    return <div className='alert'>No hay usuarios</div>;
  }

  return (
      <div className="app">
        {users.map((user) => {
          return <Profile id={user.id} name={user.name} imageUrl={user.imageUrl} age={user.age} />;
        })}
      </div>
    );
}

export default App;
