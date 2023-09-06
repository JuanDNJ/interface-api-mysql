import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';

const Logo = () => {
  console.log("Render de logo")

  return (
    <div>
      
        <Link to="/">
         
          <img width={48} src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
      </div>
  );
}
export default Logo;