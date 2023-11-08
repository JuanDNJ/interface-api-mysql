import styles from './account.module.css'
import { Link } from 'react-router-dom';
import Signout from '@/components/Account/Signout';
import { useUserContext } from '@/context/user.ctx';
const Account = () => {
    const { signin } = useUserContext();

    return (
        <section className={styles.account}>
            {!signin && <><Link className={styles.link} to="/signin">SignIn</Link>
                <Link className={styles.link} to="/signup">SignUp</Link></>}
            {signin && <Link className={styles.link} to="/account">Account</Link>}
            <Signout />
        </section>
    );
}
export default Account;