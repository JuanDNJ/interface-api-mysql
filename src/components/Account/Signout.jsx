import { useUserContext } from "@/context/user.ctx";
import { removeToken } from "@/handlers";
import styles from './account.module.css'
const Signout = () => {
    const {signin,toggleSignin} = useUserContext()

    const handlerSignOut = async () => {
        await removeToken()
        toggleSignin()
        
    }
  return (
    <>
    {signin && <button className={styles.btnSignOut} onClick={handlerSignOut}>Sign Out</button>}
    </>
  );
}
export default Signout;