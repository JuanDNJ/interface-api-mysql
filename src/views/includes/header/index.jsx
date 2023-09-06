import styles from './header.module.css'
import Logo from '@/components/Logo'
import Account from '@/components/Account';

import { apifetch } from '@/handlers/fetching'
import { useEffect } from 'react';

const Header = () => {

  const handlerGetPets = async () => {
    const data = { email: 'admin@admin.adm', password: 'Admin@2023' }
    const dataJosn = await apifetch.post('/authorization/signin', data).then(res => res)
    const dataJosn2 = await apifetch.get('/equipos-futbol/get-club/Casablanca').then(res => res)
    return {
      dataJosn,
      dataJosn2
    }
  }

  useEffect(() => {
    handlerGetPets().then(res => {
      console.log(res)
    })
  })

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
