import styles from './account.module.css'
import { Link } from 'react-router-dom';
import Signout from '@/components/Account/Signout';
import { useUserContext } from '@/context/user.ctx';
const Account = () => {
    const {signin} = useUserContext();
   
    console.log("Render de account")
    
    return (
        <section className={styles.account}>
            {!signin && <><Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link></>}
            <Signout />
        </section>
    );
}
export default Account;