import styles from './account.module.css'
import { Link } from "react-router-dom";
const Signin = () => {
    return (
        <section className={styles.signin}>
            <article className={styles.article_flex}>
                <header>
                    <h1>Sign In</h1>
                </header>
                <section>
                    <form className={styles.form} onSubmit={(eve) => eve.preventDefault()}>
                        <input type="email" placeholder="Insert your E-mail" />
                        <input type="password" placeholder="Insert your password" />
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