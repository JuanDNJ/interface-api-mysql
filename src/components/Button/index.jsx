import styles from './button.module.css'
const Button = ({ type, style, children, click, view }) => {
  return (
    <button type={type} onClick={click} data-view={view} className={style === 'btnProfile' ? styles.profile : styles.btn}>
      {children}
    </button>
  );
}
export default Button;