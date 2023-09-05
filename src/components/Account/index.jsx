import { useEffect, useState } from 'react';
import styles from './account.module.css'
import { Link } from 'react-router-dom';
import { getToken, setToken, removeToken } from '../../handlers';

const Account = () => {

    const [account, setAccount] = useState('')

    const handlerAddAccount = async () => {
        setAccount(() => setToken(''))
    }
    const handlerLogOut = () => {
        setAccount(() => removeToken())
    }
    useEffect(() => {
        getToken().then(token => {
            setAccount(() => token)
        })

    }, [account])
    return (
        <section className={styles}>
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
        </section>
    );
}
export default Account;