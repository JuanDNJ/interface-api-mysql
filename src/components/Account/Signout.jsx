import { useUserContext } from "@/context/user.ctx";
import { removeToken } from "@/handlers";
const Signout = () => {
    const {signin,toggleSignin} = useUserContext()

    const handlerSignOut = async () => {
        const rem = await removeToken()
        toggleSignin()
        
    }
  return (
    <>
    {signin && <button onClick={handlerSignOut}>Sign Out</button>}
    </>
  );
}
export default Signout;