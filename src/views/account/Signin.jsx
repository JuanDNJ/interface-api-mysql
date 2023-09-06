import styles from './account.module.css'
import { Link } from "react-router-dom";
import { apifetch } from '../../handlers/fetching.js'
import { setToken } from '../../handlers';
import { useUserContext } from '../../context/user.ctx';
const Signin = () => {
    const {toggleSignin} = useUserContext()
    const handlerSignin = (eve) => {
        eve.preventDefault()
        const {email, password} = eve.target;
        const body = {email : email.value, password: password.value}
        apifetch.post("/authorization/signin", body)
        .then(res => {
            console.log(res)
            if(res.exist) {
                setToken(res.token)
                toggleSignin()
            }
        })
        
        console.log( eve.target.email.value)
    }

    return (
        <section className={styles.signin}>
            <article className={styles.article_flex}>
                <header>
                    <h1>Sign In</h1>
                </header>
                <section>
                    <form className={styles.form} onSubmit={handlerSignin}>
                        <input type="email" name="email" placeholder="Insert your E-mail" />
                        <input type="password" name="password" placeholder="Insert your password" />
                        <button type="submit">Sing In</button>
                    </form>
                </section>
                <footer>
                    <div>
                        <Link to="/">Return</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>
                </footer>
            </article>
        </section>
    );
}
export default Signin;