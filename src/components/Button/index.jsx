import styles from './button.module.css'
const Button = ({type, style, children}) => {
  return (
    <button type={type} className={style === 'btnProfile' ? styles.profile : styles.btn}>
        {children}
    </button>
  );
}
export default Button;