import styles from './account.module.css'
import { Link } from "react-router-dom";

const Signup = () => {
    return (

        <section className={styles.signup}>
            <article className={styles.article_flex}>
                <header>
                    <h1>Sign Up</h1>
                </header>
                <section>
                    <form className={styles.form} onSubmit={(eve) => eve.preventDefault()}>
                        <input type="text" placeholder="Insert your name"/>
                        <input type="email" placeholder="Insert your E-mail" />
                        <input type="password" placeholder="Insert your password" />
                        <button type="submit">Sing Up</button>
                    </form>
                </section>
                <footer>
                    <div>
                        <Link to="/">Return</Link>
                        <Link to="/signin">SignIn</Link>
                    </div>
                </footer>
            </article>
        </section>
    );
}
export default Signup;