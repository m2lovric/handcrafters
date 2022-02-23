import { Layout } from './components/Layout';
import './sass/pages/App.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

interface loginData {
  username: string;
  password: string;
}

function App() {
  const [loginData, setLoginData] = useState<loginData>({
    username: '',
    password: '',
  });

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8008/token', {
        loginData,
      });
      const data = res.data();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <main className='container app'>
        <section className='photo-grid-container'>
          <section className='photo-grid'>
            <img
              src='./images/battlecreek-coffee-roasters-rsnzc-8dVs0-unsplash.jpg'
              alt=''
            />
            <img src='./images/c-d-x-PDX_a_82obo-unsplash.jpg' alt='' />
            <img
              src='./images/charles-deluvio-1-nx1QR5dTE-unsplash.jpg'
              alt=''
            />
            <img src='./images/daniel-korpai-hbTKIbuMmBI-unsplash.jpg' alt='' />
            <img src='./images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg' alt='' />
            <img
              src='./images/fernando-andrade-potCPE_Cw8A-unsplash.jpg'
              alt=''
            />
            <img
              src='./images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg'
              alt=''
            />
            <img src='./images/imani-bahati-LxVxPA1LOVM-unsplash.jpg' alt='' />
            <img src='./images/jakob-owens-O_bhy3TnSYU-unsplash.jpg' alt='' />
            <img src='./images/rachit-tank-2cFZ_FB08UM-unsplash.jpg' alt='' />
            <img src='./images/revolt-164_6wVEHfI-unsplash.jpg' alt='' />
            <img
              src='./images/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg'
              alt=''
            />
            <img src='./images/varun-gaba-dcgB3CgidlU-unsplash.jpg' alt='' />
            <img src='./images/alex-motoc-0POwK6iAiRQ-unsplash.jpg' alt='' />
          </section>
        </section>
        <section className='registration'>
          <form className='login form' onSubmit={handleLogin}>
            <input
              type='text'
              placeholder='Username'
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
            <input
              type='password'
              placeholder='Password'
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <button type='submit' className='form--btn btn-blue'>
              Log in
            </button>
          </form>
          <section className='mid'>
            <div className='line'></div>
            <p>or</p>
            <div className='line'></div>
          </section>
          <Link to='/signup' className='btn-signup'>
            Sign Up
          </Link>
        </section>
      </main>
    </Layout>
  );
}

export default App;
