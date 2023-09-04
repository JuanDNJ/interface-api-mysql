import { Link } from 'react-router-dom';
import styles from './header.module.css'
import Logo from '@/components/Logo'
import Account from '../../../components/Account';
import Navigation from '../navigation';
const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <section className={`${styles.module}`}>
        <Logo />
        <h1 className='mainTitle'>Api MySql</h1>
      </section>

      <section className={`${styles.module}`}>
        <Navigation>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/contact">Contact</Link>
        </Navigation>
        <Account />
      </section>
    </header>
  );
}
export default Header;