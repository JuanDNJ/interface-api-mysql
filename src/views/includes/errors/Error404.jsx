import { Link } from "react-router-dom";

const Error404 = () => {
    const styles = {
        color: "red",
        fontWeight: '900',
        textDecoration: 'none',
        fontSize: '1.5rem'
    }
    return (
        <>
            <h1>Upss Error 404¡</h1>
            <p>
                Ponte en contacto con el administrador de la web
            </p>
            <Link style={styles} to="/interface-api-mysql">Go Back¡</Link>
        </>
    );
}
export default Error404;