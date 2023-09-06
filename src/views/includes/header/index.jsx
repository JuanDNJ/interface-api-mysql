import styles from './header.module.css'
import Logo from '@/components/Logo'
import Account from '@/components/Account';

const Header = () => {

  return (
    
    <header className={styles.mainHeader}>
      <section className={`${styles.module} ${styles.fStart}`}>
        <Logo />
        <h1 className='mainTitle'>Api MySql</h1>
      </section>
      <section className={`${styles.module} ${styles.fEnd}`}>
        <Account />
      </section>
    </header>

  );

}

export default Header;
