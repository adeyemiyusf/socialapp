import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Navbar = () => {
    const [user] = useAuthState(auth)
    const logOut =async () => {
        await signOut(auth)
    }
    return (  
        <div className="navbar" >

            <div className="links">
        <Link to="/">Home</Link>
        {!user? (
        <Link to="/login">Login</Link>
        ) : (
        <Link to="/createPost">Create Post</Link>
        )
        }
           </div>

        <div className="user">
            { user && (
                <>
            {user?.displayName}
            <img src={user?.photoURL || ""} alt="" height='40' width='40' />
            <button onClick={logOut}>Log Out</button>
            </>
            )}
        </div>
        </div>
    );
}
 
export default Navbar;