import { Layout } from './components/Layout';
import './App.scss';

function App() {
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
          <form className='login form'>
            <h1>Login</h1>
            <input type='text' name='username' id='' placeholder='Username' />
            <input type='text' name='password' id='' placeholder='Password' />
            <button type='submit' className='form--btn btn-blue'>
              Log in
            </button>
          </form>
          <section className='mid'>
            <div className='line'></div>
            <p>or</p>
            <div className='line'></div>
          </section>
          <form className='signup form'>
            <h1>Signup</h1>
            <input type='text' name='username' id='' placeholder='Username' />
            <input type='text' name='password' id='' placeholder='Password' />
            <button type='submit' className='form--btn btn-blue'>
              Sign up
            </button>
          </form>
        </section>
      </main>
    </Layout>
  );
}

export default App;
