import '../sass/Layout.scss';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className='nav'>
        <div className='container'>
          <h1 className='nav--logo'>handcrafters</h1>
          <section className='nav--links'>
            <Link to='/'>Home</Link>
            <a href='/'>Messages</a>
            <Link to='/profile'>Profile</Link>
            <input type='search' placeholder='Search' />
          </section>
        </div>
      </nav>
      <main>{children}</main>
      <footer className='footer'>Handcrafters &copy; 2022</footer>
    </>
  );
};

export { Layout };
