import styles from './navigation.module.css'
const Navigation = ({children}) => {
  return (
    <nav className={styles}>
        {children}
    </nav>
  );
}
export default Navigation;