import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';

interface IUser {
  active: boolean;
  birth_date: string;
  email: string;
  id: number;
  name: string;
  middle_name?: string;
  surname: string;
}

const Profile = () => {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    //TODO Get active user
    axios.get('http://localhost:8008/users/2').then((res) => setUser(res.data));
  }, []);

  return (
    <Layout>
      <main className='container'>
        <h2>Profile</h2>
        <h3>Name:</h3>
        <p>
          {user?.name} {user?.middle_name} {user?.surname}
        </p>
        <h3>Email:</h3>
        <p>{user?.email}</p>
        <h3>Birthday:</h3>
        <p>{user?.birth_date}</p>
      </main>
    </Layout>
  );
};

export default Profile;
