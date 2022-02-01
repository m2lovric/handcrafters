import { Layout } from '../components/Layout';
import './Login.scss';

const LogInPage = () => {
  return (
    <Layout>
      <div className='login'>
        <form className='login--form'>
          <h1>Login</h1>
          <input type='text' name='username' id='' placeholder='Username' />
          <input type='text' name='password' id='' placeholder='Password' />
          <button type='submit' className='login--form--btn btn-blue'>
            Log in
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LogInPage;
