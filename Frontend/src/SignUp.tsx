import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import './sass/pages/SignUp.scss';
import axios from 'axios';

// interface IUser {
//   name: string;
//   surname: string;
//   birth_date: string;
//   email: string;
//   password: string;
// }

const SignUp = () => {
  useEffect(() => {
    const signupForm: HTMLFormElement = document.querySelector('.form')!;
    const nameInput: HTMLInputElement = document.querySelector('.name')!;
    const surnameInput: HTMLInputElement = document.querySelector('.lastname')!;
    const birthDateInput: HTMLInputElement = document.querySelector('.date')!;
    const emailInput: HTMLInputElement = document.querySelector('.email')!;
    const passwordInput: HTMLInputElement =
      document.querySelector('.password')!;

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      axios({
        method: 'post',
        url: 'http://localhost:8008/users/',
        headers: {
          'Access-Control-Allow-Origin': 'http://127.0.0.1:3000/',
          'Content-Type': 'application/json',
        },
        data: {
          name: nameInput.value,
          surname: surnameInput.value,
          birth_date: birthDateInput.value.toString(),
          email: emailInput.value,
          password: passwordInput.value,
        },
      }).then((res) => {
        console.log(res.data.headers);
        signupForm.reset();
      });
    });
  }, []);

  return (
    <Layout>
      <section className='signup'>
        <section className='signup--left'></section>
        <section className='signup--right'>
          <form className='form'>
            <section className='form__section'>
              <article className='form__section--input'>
                <label htmlFor='name'>First Name</label>
                <input type='text' name='name' className='name' />
              </article>

              <article className='form__section--input'>
                <label htmlFor='surname'>Last Name</label>
                <input type='text' name='surname' className='lastname' />
              </article>
            </section>

            <section className='form__section'>
              <article className='form__section--input'>
                <label htmlFor='date'>Birth Date</label>
                <input type='date' name='birth-date' className='date' />
              </article>

              <article className='form__section--input'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' className='email' />
              </article>
            </section>

            <section className='form__section'>
              <article className='form__section--input'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' className='password' />
              </article>
              <article className='form__section--input'>
                <label htmlFor='password-confirm'>Confirm Password</label>
                <input type='password' name='password-confirm' />
              </article>
            </section>

            <button className='form--btn'>Create Account</button>
          </form>
          <article className='have-acc'>
            <p>Already have an account ?</p>
            <Link to='/'>Log In</Link>
          </article>
        </section>
      </section>
    </Layout>
  );
};

export default SignUp;
